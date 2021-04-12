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
const entry=details
entry.name=event.target.value
setDetails(entry)
}
  function setMobile(event)
  const entry=details
  entry.Mobile=event.target.value
  setDetails(entry)
  }
  function setAddress(event)
    const entry=details
    entry.address=event.target.value
    setDetails(entry)
    }
  console.log(details)
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
