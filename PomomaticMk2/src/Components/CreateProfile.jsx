import { useState } from "react"
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
function CreateProfile()

{
const navigate = useNavigate()
const [userData, setUserData] = useState({
Username:"",
email:"",
password:"",

})
const CreatenewProfile = async(e) => 
{e.preventDefault();
const {Username, email, password} = data
try {
const{data} = await axios.post('./CreateProfile',
{Username, email, password})
 if (data.error){
toast.error(data.error)
}
else
{setUserData({})
toast.success('Login was Successful. Welcome back')
navigate('/Loginform')
}
}
catch(error){
console.log(error);
}
}

return(
 <div>
<img src = "./logo/Tomato.png" alt = "It's a Tomato" id = "tomatopic"></img>
<form>
<label for = "username">Username</label>
<p><input type = "Text" name = "usename" placeholder="please enter a username"required></input></p>
<label for = "email">Email</label>
<p><input type = "email" name = "email"  placeholder="please enter an email address" required></input></p>
<label for = "username">password</label>
<p><input type = "Text"  placeholder="please enter a password" required></input></p>
<button>Create Profile</button>
 
</form>
</div>
 )

}

 export default CreateProfile