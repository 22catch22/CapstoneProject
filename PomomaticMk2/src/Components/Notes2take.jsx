import {useState,useEffect, useContext} from "react";
import axios from 'axios'
 import { UserContext } from "../Context/userContext";
 import {toast} from 'react-hot-toast'
import MusicPlayer from "./Musicplayer";


function NoteTaker()
 //This is where we add the comments 
{
 
const [notelist, setNotelist]= useState([])
const [note, setNote] = useState('')
 
function CreatenewNotes()
{
 
    setNotelist(...prevnotes, note)
console.log(notelist)

}

return (
<> 
 <div id = "notefield">
 <div id = "notedisplay">
<form id = "noteform" onSubmit={CreatenewNotes}>

<input 
type = "text"
id = "notetext" 
 
onChange = {(e)=> setNote(e.target.value)}
/>
 <button id = "notebutton" type = "submit">Post</button>
 </form>
 <div> 
    <ul>{notelist.map((not) => (
 <li key = {not.id}>{not.text}</li>
))}
</ul>
</div>
</div>
</div>
</>
)}

export default NoteTaker
