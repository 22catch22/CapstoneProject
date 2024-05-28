import React, {useState, useRef, useEffect} from 'react';
import {useTimer} from 'react-timer-hook';
import Card from 'react-bootstrap/Card'; 
import Quoteviewer from './Quoteviewer';

import ProgressBar from 'react-bootstrap/ProgressBar';

function Timer({ expiryTimestamp }) {
  const {
  
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
   
  } = useTimer({ expiryTimestamp, autoStart:false, onExpire: () => console.warn("Time's up!") });


  return (
    <div id = "timerbox" style={{textAlign: 'center'}}>
 <ProgressBar id = "progressbar" now = {25} label = {"hello"}/>
 <Card>
 
  <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <div style={{fontSize: '100px'}}>
    
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    
     
   </Card>
    </div>
   
  );
}

 export default Timer;


 