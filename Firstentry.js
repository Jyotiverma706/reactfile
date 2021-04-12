import React from 'react'
import './App.css';



function App() {
  const form=[{"name":"","address":"","Mobile":""}]
  const Entry=form.map(abc=><div>{abc.name}{abc.Mobile}{abc.address}</div>)
  console.log(Entry)
     return (
      <form>
        <label>
         Enter Name:<br></br>
            <input type="text" name="name"></input><br></br>
         Address:<br></br>
            <input type="text"></input><br></br>
         Mobile No.:<br></br>
            <input typer="Number"></input><br></br>
         <button>Submit</button>
       </label>
  </form>
      )
};
export default App;
