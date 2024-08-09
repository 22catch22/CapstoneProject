 
import Quoteviewer from "../Components/Quoteviewer"
import Timer from "../Components/Timer"
import { Link } from "react-router-dom"
 
import { UserContext } from "../Context/userContext"
import { useContext } from "react"
import Notes from "../data/Notes" 
import NoteTaker from "../Components/Notes2take"
import Optionsmenu from "../Components/Options"
import VideoandNote from "../Components/Videoandnote"
import Displayvideonotes from "../Components/Displayvideonote"
import Userinput from "./ListInput"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
 import { useState } from "react"
import Notetaker from '../Components/Notes2take'
function TimerPage(){
const{user} = useContext(UserContext);
const time = new Date();
time.setMinutes(time.getMinutes()+ 10)
 
return (
<> 
<span className='font-link'>
<div>
<div id = "loginbar">
<img src = "./logo/Tomato.png" id = "tomatopic2" height = "100" length = "100"></img>
<div id = "greeting">{!!user && (<h3>Welcome {user.username}!</h3>)}
<Quoteviewer/>
<Link to = "/"><button>Logout</button></Link>
</div> 
<Timer expiryTimestamp={time}/>
</div>
<div id = "timerpage" >
<div id = "backing">
<Displayvideonotes/>
</div>
</div>
</div>
</span>
</>

)




}
export default TimerPage