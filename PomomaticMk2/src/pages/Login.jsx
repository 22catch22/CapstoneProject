import {Link} from 'react-router-dom'
import LoginForm from "../Components/LoginForm"

function Loginpage(){
return(
<>
<div id = "loginbox">
<img src = "./logo/Tomato.png" alt = "It's a Tomato" id = "tomatopic"></img>
<h1>Welcome to the Pomomatic!</h1>
<p>Please enter login credentials!</p>
<LoginForm />
<Link to = "/Pomoinfo"><button>What's a Pomodoro?</button></Link>
 </div>
</>
) 
}
export default Loginpage