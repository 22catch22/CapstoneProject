const jwt = require ('jsonwebtoken');
const User = require ('./modelsnstuff/user')
const Notes = require ('./modelsnstuff/notes')
const { comparePassword, hashslingingPassword} = require ('./auth');
const { compare } = require('bcrypt');
 
 
const createProfile = async (req, res) => {

try{
    const {Username, email, password} = req.body;

if(!Username)
{return res.json({error: 'Please enter a valid username'})}

if (!email)
{return res.json({error: 'Please enter a valid email'})}

if (!password || password.length < 6)
{return res.json({error: 'Please enter a valid password with at least six characters'})}

const exist = await User.findOne({email});
if (exist)
{
return res.json ({
error: "I'm sorry, but that email address is already taken",
});}

//this creates a user in the database
const hashpassword = await hashslingingPassword


const user = await User.create
({
    Username,
    email,
    password: hashpassword,
     
});

return res.json(user);
} catch(error)
{console.log(error);
}
};
 
const getNotes = async (req, res) =>
    {
    const {notes} = req.body
    const mynotes = Notes.findOne({notes})
     return res.json(mynotes)
    }


const postNotes = async (req,res) =>
{ 
 try
 {
const notes = req.body
 notes.findOneAndUpdate({_id: notes})

return res.json(Notes.notes)
}catch(error)
 {console.log()}
}

//logs in user

const loginProfile = async (req,res) => {
try{
const{email, password} = req.body;

const user = await User.findOne({email});
if(!user)
{return res.json
({error:"Sorry, but I can't find that user"})
}



//checks passwords
const matchmaker = await comparePassword(password, user.password)
if (matchmaker)
    {
        jwt.sign({email:user.email, id: user._id, username: user.Username},process.env.JWT_SECRET, {}, (err,token) => 
        {
        if(err) throw err;
        res.cookie('token', token).json(user)
        })
    } 
  if (!matchmaker)
        {res.json({
error: "The Passwords do not match :("
})}
}   
catch(error)
{console.log(error)
}
}  

const getUser = (req, res) =>
{const {token} = req.cookies
 if (token)
{jwt.verify(token, process.env.JWT_SECRET,{},(err, user)=> {
if (err) throw err;
res.json(user)
 })}
else{res.json(null)}
}



const postPomos = (req, res) =>{}

module.exports = {createProfile, loginProfile, getUser, postNotes, getNotes}
