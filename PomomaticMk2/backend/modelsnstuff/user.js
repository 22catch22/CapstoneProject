const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
Username: String,
email:
{
type:String,
unique:true
},
password: String,
 
notes:{type:String}


})



const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;