
function Userinput(){
<form>
<label for = "title">Pomo1:</label><br/>
<input type = "text" id = "title" name = "title" value = "Write name here"></input>
<label for = "minutes"></label><br/>
<div>
     <input
        type="number"
        min="0"
        max="30"
        value={minutes}
        onChange={(event) => handleInputChange(event, setMinutes)}
      />
      :
      
</div>
<label for = "seconds"></label><br/>
<input
        type="number"
        min="0"
        max="59"
        value={seconds}
        onChange={(event) => handleInputChange(event, setSeconds)}
      />
<button>Add to list</button>
</form>
}
export default Userinput