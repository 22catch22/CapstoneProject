import React from "react";
 
import Popup from "reactjs-popup";

 
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
)};
export default Optionsmenu;





