import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Confirmation from './Confirmation';
import React, {useState} from 'react';

function App() {
  const [details, setDetails] = useState({"name":"","Address":"","Phone":""});
function setName(event)
{
  const entry=details
  entry.name = event.target.value
  setDetails(entry)
}
function setAddress(event)
{
  const entry=details
  entry.Address = event.target.value
  setDetails(entry)
}
function setPhone(event)
{
  const entry=details
  entry.Phone=event.target.value
  setDetails(entry)
}
function test()
{
  console.log(details)
}
  return (
    <Router>
        <div>
      <h1 className="header">Entry Form</h1>
      <div className="input">
       Entre Your Name:<br></br>
       <input type="text" onChange={setName}></input><br></br>
       Address:<br></br>
       <input type="Text" onChange={setAddress}></input><br></br>
       Phone Number:<br></br>
       <input typer="Number" onChange={setPhone}></input>
      <br></br>  
      <br></br>
      <button onClick={test} className="button"><Link to= "/confirmation">Submit</Link></button>
      <br></br>
    </div>
    </div>
      <Switch>
        <Route path="/confirmation"><Confirmation details={details}></Confirmation></Route>
      </Switch>    
 </Router>
  );
}
export default App;
