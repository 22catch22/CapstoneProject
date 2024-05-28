import { useContext, useState} from "react";
import notes from "../data/Notes";
import Notes from "../data/Notes"
 
import DisplayNotes from "./displayNotes";
import { noteContext } from "../App";
function NoteTaker()
 //This is where we add the comments 
{

const {createNote} = useContext(noteContext)
const handysub = (e) => {e.preventDefault();
 
let fData = new FormData(e.target);

let newNote = {
Text: fData.get("Notebox"),
};
 
createNote(newNote)
Notes.push(newNote);
e.target.reset();
console.log(Notes);
}

return (
<>
 
<div id = "notefield">
 <div id = "notedisplay">
<form id = "noteform" onSubmit={handysub}>

<input type = "text" name = "Notebox" id = "Notebox"placeholder="Type Your Notes Here" required></input>
 <button type = "submit" id = "notebutton">Post</button>
 </form>
<DisplayNotes/>
</div>
</div>
</>
)

}
export default NoteTaker
