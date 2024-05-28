
import {Link} from 'react-router-dom'
import { useState } from 'react' 
 
const loginUser = () =>{}



function loginform()
{
  

 return(
<>
<div id = "loginform"> 
<form>
<label for = "username">Username</label>
<p><input type = "Text" name = "usename" required></input></p>
<label for = "email">Email</label>
<p><input type = "Text" name = "email" required></input></p>
<label for = "username">password</label>
<p><input type = "Text" name = "username" required></input></p>
 
<Link to ="/Timerpage"><button>Login</button></Link>
<p><Link to ="/CreateProfile"><button>Don't have a profile? Click Here!</button></Link></p>
</form>
</div>
</>
 )
 }
 export default loginform