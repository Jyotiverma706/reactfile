import React from 'react';
import react,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
const [details, setDetails]= useState({"name":"","address":"","Mobile":""})
function setName(event)
const Entry=details
Entry.name=event.target.value
setDetails(Entry)
}
function setMobile() {
  const [details, setDetails]= useState({"name":"","address":"","Mobile":""})
  function setMobile(event)
  const Entry=details
  Entry.name=event.target.value
  setDetails(Entry)
  }
  function setAddress() {
    const [details, setDetails]= useState({"name":"","address":"","Mobile":""})
    function setAddress(event)
    const Entry=details
    Entry.name=event.target.value
    setDetails(Entry)
    }
  console.log(Entry)
     return (
       <router>
      <div>
        <label>
         Enter Name:<br></br>
            <input onChange={setName} type="text" name="name"></input><br></br>
         Address:<br></br>
            <input onChange={setMobile} type="text"></input><br></br>
         Mobile No.:<br></br>
            <input onChange={setAddress} typer="Number"></input><br></br>
        <button><Link to="/confirmation">Submit</Link></button>
       
       <switch>
       <Route path="./confirmation">confirmation</Route>
       </switch>
       </label>
  </div>
  </router>      )
};
export default App;
