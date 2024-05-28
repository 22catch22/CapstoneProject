const test = (req, res) => {res.json(console.log('you suck'))}

const User = require ('./modelsnstuff/user')
 
const CreateProfile = async (req, res) => {

try{
    const {username, email, password} = req.body;

if(!username)
{return res.json({error: 'Please enter a valid username'})}

if (!email)
{return res.json({error: 'Please enter a valid email'})}

if (!password || password.length < 6)
{return res.json({error: 'Please enter a valid password with at least six characters'})}
const exist = await User.findOne({email});
if (exist){return res.json ({error: "I'm sorry, but that email address is already taken"})}


}
catch{error}

}

module.exports = {
test,
CreateProfile
}