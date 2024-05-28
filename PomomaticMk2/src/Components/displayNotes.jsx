import { useState } from "react";
import notes from '../data/Notes'
import Notes from '../data/Notes';
import NoteTaker from "./Notes2take";


function DisplayNotes()
{

return(
<> 
{Notes && Notes.map (note => {
return(
 <div>
 <ul>
 <li contentEditable = 'true'>{note.Text} </li><button>Delete</button>
 
 </ul>
</div>
)
})
}
</>
)
}
export default DisplayNotes