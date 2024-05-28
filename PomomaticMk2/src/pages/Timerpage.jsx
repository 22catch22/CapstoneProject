import Backgroundpicker from "../Components/Backgroundpicker"
import Quoteviewer from "../Components/Quoteviewer"
import Timer from "../Components/Timer"
import { Link } from "react-router-dom"
import MusicPlayer from "../Components/Musicplayer"
import DisplayNotes from "../Components/displayNotes"
import Notes from "../data/Notes" 
import NoteTaker from "../Components/Notes2take"
import Optionsmenu from "../Components/Options"
import VideoandNote from "../Components/Videoandnote"
import Displayvideonotes from "../Components/Displayvideonote"
import Userinput from "./ListInput"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ParticleBackground from "../Components/Particles"
function TimerPage(){
const time = new Date();
 
time.setMinutes(time.getMinutes() + 25);

return (
<>
 <Navbar className="bg-body-tertiary">
  <ParticleBackground/>
<Optionsmenu/>
</Navbar> 

<div id = "timerpage">

 
<Displayvideonotes/>
 <Card id="timercard" className = 'mb-2'>
<Card.Body><Quoteviewer/>
<Timer expiryTimestamp={time}/>
</Card.Body>

</Card>
<MusicPlayer/>
</div>



</>

)




}
export default TimerPage