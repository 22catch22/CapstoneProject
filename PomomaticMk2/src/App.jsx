 
 
import './App.css'
import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./pages/Login"
import Timerpage from './pages/Timerpage';
import Pomoinfo from './pages/Pomoinfo';
import ListInput from './pages/ListInput';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateProfile from './Components/CreateProfile';
import { createContext } from 'react';
import Notes from './data/Notes';
import backgroundImage from './data/backgroundimage';
import VideoandNote from './Components/Videoandnote';
import Userinput from './pages/ListInput';
import axios from 'axios'
import CreateProfilePage from './pages/CreateProfilePage';
import {Toaster} from 'react-hot-toast';
import ParticleBackground from './Components/Particles';


axios.defaults.baseURL = 'http://localhost:5173'
axios.defaults.withCredentials = true



const noteContext = createContext()
const backgroundContext = createContext();
function App(){

 const [note, setNote] = useState(Notes)
function createNote(not)
{not.id = note.length +1;
    setNote ([note]);
}

 const [image, setBackgroundImage] = useState(backgroundImage);
 function createbackground(bpic)
 {bpic.id = image.length +1;
setBackgroundImage([backgroundImage])

 }

 return(
<BrowserRouter>

 <backgroundContext.Provider value = {{image, createbackground}}> 
 <noteContext.Provider value ={{note, createNote}}> 
 <Toaster position = 'bottom-right' toastOptions={{duration:2000}}/>
<Routes>

<Route path = '/' element = {<Login />}/>
<Route path = "/CreateProfile" element = {<CreateProfile/>}/>
<Route path = "/Pomoinfo" element = {<Pomoinfo/>}/>
<Route path = "CreateProfilePage" element = {<CreateProfilePage/>}/>
<Route path = "/Timerpage" element  = {<Timerpage />}/>
<Route path = "/ListInput.jsx" element = {<ListInput/>}/>
 
</Routes>
</noteContext.Provider>
 </backgroundContext.Provider>
 
</BrowserRouter>

)
}

export default App
export {noteContext};