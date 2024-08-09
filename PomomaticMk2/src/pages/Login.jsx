import {Link} from 'react-router-dom'
import LoginForm from "../Components/LoginForm"

function Loginpage(){
return(
<>
<div id = "loginbox">
<img src = "./logo/Tomato.png" alt = "It's a Tomato" id = "tomatopic"></img>
<span className='font-link'>
 
<h1>Welcome to the Pomomatic!</h1>
<p>Please enter login credentials!</p>
<LoginForm />

</span>
 </div>
</>
) 
}
export default Loginpage