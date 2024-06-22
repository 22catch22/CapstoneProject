import React from "react"; 
  
const Nav = ({ setLibraryStatus, libraryStatus }) => { 
    return ( 
        <nav> 
            <h1>Pomomatic Music Player</h1> 
            <button 
                onClick={() => { 
                    setLibraryStatus(!libraryStatus); 
                }} 
            > 
                <h4>Library</h4> 
            </button> 
        </nav> 
    ); 
}; 
  
export default Nav; 