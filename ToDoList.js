
import React,{useState} from 'react';
import './App.css';
const App =() => {
  const[inputList, setInputList]=useState("");
   const itemEvent=(event) => {
     setInputList(event.target.value);
   };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br></br>
        <h1>ToDoList</h1>
        <br></br>
        Add Items:<input type="text" placeholder="Add a item" onChange={itemEvent}></input>
        <br></br>
        <button onChange>Add</button>
        <ol>
          <li>{inputList}</li>
        </ol>
      </div>
    </div>
    </>
  );
};


export default App;
