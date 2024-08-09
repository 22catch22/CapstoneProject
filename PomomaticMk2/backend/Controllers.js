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

//--//
const deleteNote = async (req, res) =>{
 
const noteId = req.params.noteId
 
try{const note = Notes.findOne({_id:noteId})
console.log(noteId)
if (!note){
return res.status(404).json ({error:true, message:"Error"
});
}
await Notes.deleteOne({_id:noteId})

return res.json
({error: false, message:"Note deleted. You monster."})
}
catch(error)
{return res.status(500).json(
{error:true, message: "Internal Server Error",})}
}
//--//
 
const getUser = (req, res) =>
{const {token} = req.cookies
 if (token)
{jwt.verify(token, process.env.JWT_SECRET,{},(err, user)=> {
if (err) throw err;
res.json(user)
 })}
else{res.json(null)}
}

//Allows user to add Notes
const postNotes = async(req, res) =>{
const {userId, text, created} = req.body
 
try{
const note = await Notes.create({
userId,
text,
created, 
});
if (!note)
    {return res.json({error:"Please enter a note"})}
console.log(note)
await note.save();

return res.json({error:false,
    note, 
    message:"Note added :)",
});
}catch (error){return res.status(500).json}

}

//fetches Notes
const getNotes = async(req, res) => {
Notes.find()
.then(notes => res.json(notes))
.catch(err => res.json(err))
console.log
 
}
 
 

const postPomos = (req, res) =>{}

module.exports = {createProfile, loginProfile, getUser, postNotes, getNotes, deleteNote}
