 
 
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
 
import axios from 'axios'
import CreateProfilePage from './pages/CreateProfilePage';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './Context/userContext';
import { NoteContextProvider } from './Context/noteContext';


axios.defaults.baseURL = 'http://localhost:8008';
axios.defaults.withCredentials = true

const timeridcontext = createContext();
const NoteContext = createContext();

function App(){

 const [note, setNote] = useState(Notes)
function createNoteid (not)
{not.id = note.length +1;
    setNote([note]);
}
 
 return(
<BrowserRouter>
<UserContextProvider>
 
 <NoteContextProvider value ={{note, createNoteid}}> 
 
 <Toaster position = 'bottom-right' toastOptions={{duration:2000}}/>
 <Routes>

<Route path = '/' element = {<Login />}/>
 
<Route path = "/CreateProfile" element = {<CreateProfile/>}/>
<Route path = "/Pomoinfo" element = {<Pomoinfo/>}/>
<Route path = "CreateProfilePage" element = {<CreateProfilePage/>}/>
<Route path = "/Timerpage" element  = {<Timerpage />}/>
<Route path = "/ListInput.jsx" element = {<ListInput/>}/>
 </Routes>
</NoteContextProvider>
 
</UserContextProvider>
</BrowserRouter>

)
}

export default App
export {NoteContext};
 
export {timeridcontext};