import {useState,useEffect, useContext} from "react";
import axios from 'axios'
 import { UserContext } from "../Context/userContext";
 import {toast} from 'react-hot-toast'

import NoteContext from "../Context/noteContext";

 

function NoteTaker(){
 //This is where we add the comments 

const {notes} = useContext(NoteContext)
const [mynotes, setMynotes] = useState([])
const [nots, setNots] = useState({
text:"",
})


  const getmyNotes = async() =>{
    axios.get('/Notes', {})
    .then(res => { 
 setMynotes(res.data)
   console.log(res.data)
})
    .catch(err => {console.log(err)

})}

const deletemyNotes = async (delId)=>{
 
try{

await axios.delete(`/deleteNote/${delId}`)
setMynotes(mynotes.filter((nos)=> nos.id !== nos))
getmyNotes() 
console.log("deleted")

}
catch(error) {
console.error("Dude you're getting an error", error)
}
}
//Allows user to post notes
const postNewnote  = async (e) =>{
e.preventDefault();

try{
const {text} = nots
await axios.post('/postNotes',{nots})
if (nots.error)
  {toast.error(nots.error)}
else{
setMynotes({nots});
toast.success('Note added');
 
}
}
catch (error)
{
  if (error.response){
  console.log(error.response.data);
 console.log(error.response.status);
 console.log(error.response.headers); 
}
else if (error.request){console.log(error.request)}
else {console.log('Error', error.message);}
console.log(error.config)
}
}
//Handles that lovely input
const handyInput = (e) => {setNots(e.target.value)}
 
useEffect(()=>{ 

getmyNotes()
},[])


//


return (
<> 
 <div id = "notefield">
 <div id = "notedisplay">
<form id = "noteform" onSubmit={postNewnote}>
<input 
type = "Text"
id = "Text" 
onChange={handyInput}
required 
 />
 <button id = "notebutton" type = "submit">Post</button>
 </form>
 <div>

<ul>
 
{mynotes.map(nos => (<li key = {nos._id}>
{nos.text}{nos.created}<div><button onClick={() =>deletemyNotes(nos._id)}>X</button></div></li>))}

</ul>
</div>
</div>
</div>
</>
)
}
export default NoteTaker
