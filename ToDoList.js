
import React,{useState} from 'react';
import todo from './todo';
import './App.css';
const App =() => {
  const[inputList, setInputList]=useState("");
  const[item, setItem]=useState([]);

   const itemEvent=(event) => {
     setInputList(event.target.value);

   };
   const listOfItem=()=>{
     setItem((oldItem) =>{
     return[...oldItem, inputList];
     });
     setInputList('');
   };

  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br></br>
        <h1>ToDoList</h1>
        <br></br>
        Add Items:<input type="text" placeholder="Add a item" 
        value={inputList}
        onChange={itemEvent}></input>
        <br></br>
        <button onClick={listOfItem}>Add</button>
        <ol>
          <li></li>
          {item.map((itemVal) =>{
            return (
           <todo text ={itemVal}></todo>);
          })}
        </ol>
      </div>
    </div>
    </>
  );
};


export default App;
