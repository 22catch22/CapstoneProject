import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext({})

export function NoteContextProvider({children}){
const [notes, setNotes] = useState(null);
useEffect(() => {

    if(!notes){

    axios.get('./Notes').then(({data}) => {
    setNotes(data)})
   
    }
}, [])
    return (
   
    <NoteContext.Provider value = {{notes, setNotes}}>
    {children}
    </NoteContext.Provider>
    
        )
}
export default NoteContext