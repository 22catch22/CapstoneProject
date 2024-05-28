import { useState,useEffect } from "react";
import backgroundImage from "../data/backgroundimage";
import Timer from '../Components/Timer'
function Backgroundpicker()
{
const [color, setColor] = useState("");
const [image, setImage] = useState("");
const [fontcolor, setFontcolor] = useState("");
const [timercolor, setTimerColor] = useState("");

const clicky = image => {setImage(image);}
const clickt = timercolor => {setTimerColor(timercolor)}
const click = color => {setColor(color)}


useEffect(() => {document.body.style.backgroundColor = color}, [color])
useEffect(() => {document.body.style.backgroundImage = image}, [image])
useEffect(() => {document.body.style.color = fontcolor, [fontcolor]})

let forData = new FormData

let newBackground = 
{
src: forData.get("bcksrc")

}
 
backgroundImage.push(newBackground)
return(
    <>
   <div>
    Change Color
    <input type = "color" onChange={(e)=> setColor(e.target.value)}/>
<p>Change text color</p>
<input type = "color" onChange = {(e)=> setFontcolor(e.target.value)}/>
</div>

<div>
    <form>
<input type = "link" name = "bcksrc"></input>
<button type = "submit" onClick = {() => clicky(e.target.value)}>Change background image</button>
<input type = "color" name = "timercolor"></input>
</form>
</div>

</>
)


}
export default Backgroundpicker