import React from "react";
import Backgroundpicker from "./Backgroundpicker";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
 
function Optionsmenu()
{
return(
<>

<div id = "optionsmenu">


 
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

</>

)

};

export default Optionsmenu;





