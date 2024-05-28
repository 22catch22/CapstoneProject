import {useEffect, useState} from "react"
import usesound from "use-sound";

import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import {BiSkipNext, BiSkipPrevious} from "react-icons/bi"
import {IconContext} from "react-icons";


function MusicPlayer()



{
const [isPlaying, setIsPlaying] = useState(false);
const [play, {pause, duration, sound}] = usesound()
 
const pbutton = () => {
if (isPlaying){pause();
setIsPlaying(false);
}
else{
play();
setIsPlaying(true);
}
};
return(
    <div id = "musicbox">
  <audio controls id = 'musiccontrols'> 
  <source src ="./assets/bang.mp3" type = "audio/mpeg"/>
 
</audio>
    </div>
 
    
)
}
 

 
 
 export default MusicPlayer