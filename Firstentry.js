
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{ useState } from "react";
import confirmation from "./confirmation";


function App() {
const [details, setDetails]= useState({"name":"","address":"","Mobile":""});

function setName(event)
{
const entry = details
entry.name=event.target.value
setDetails(entry)
}
  function setMobile(event)
  {
  const entry=details
  entry.Mobile=event.target.value
  setDetails(entry)
  }
  function setAddress(event)
  {
    const entry=details
    entry.address=event.target.value
    setDetails(entry)
    }
    function test(){
  console.log(details)
    }
     return (
       <Router>
      <div>
        <h1>Entry Details</h1>
        <label>
         Enter Name:<br></br>
            <input onChange={setName} type="text" name="name"></input><br></br>
         Address:<br></br>
            <input onChange={setMobile} type="text"></input><br></br>
         Mobile No.:<br></br>
            <input onChange={setAddress} typer="Number"></input><br></br>
        <button onClick={test}><Link to="/confirmation">Submit</Link></button>
        <Switch>
      <Route path="/confirmation"><confirmation details={details}></confirmation></Route>
       </Switch>
       </label>
  </div>
  </Router>      )
};
export default App;
