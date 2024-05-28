import React from "react";
import Backgroundpicker from "./Backgroundpicker";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
 
function Optionsmenu()
{
return(
<>
<header>
<div id = "optionsmenu">
    <img src = "./logo/Tomato.png" height = "50" length = "50"></img>
<p>Welcome to the Pomomatic!</p>  
 <Link to = "/Listinput"><button>Create custom Pomodoro</button></Link>
<Popup trigger =

{<button id = "optionsbutton">Options</button>}

modal nested>
{
close => (

 

<div className = "coloroptions">

<Backgroundpicker/>
<div>
<button onClick={
() => close()}>
Close
</button>
</div>
</div>


 

)
}

</Popup>   

</div>    
</header>
</>

)

};

export default Optionsmenu;





