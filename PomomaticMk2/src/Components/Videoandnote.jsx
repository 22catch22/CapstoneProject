import React, { useEffect, useState, useRef } from "react";
import NoteTaker from "./Notes2take";
import ReactPlayer from 'react-player/youtube'

function VideoandNote()



{

const [videourl, setVideo] = useState(" ")
const vidref = useRef();
function watchVideo(){
  setVideo(vidref.current.value)
}

return(
<>
<div id = "videobox">
    <form id = "Youform">
    <label for = "YouTubevideo">video url goes here</label>
 <input type = "text" id = "YouTubevideo" ref = {vidref} onChange={watchVideo}></input>
  
  </form>
  <ReactPlayer url = {videourl}width = "70%" height = "60%"/>
</div>

</>
)

}

export default VideoandNote;