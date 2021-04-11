import './App.css';

function App() {
  const fur=[
    {
    "name":"designing sofa"},
    {"price": 2000}]
    const list=fur.map(abc=><h4>{abc.name}{abc.price}</h4>)
    console.log(list)
  return (
   <div>
     <h1>Furniture Shop</h1>
     {list}
   </div>
  );
  
}

export default App;

import './App.css';

function App() {
  const fur=[
    {
    "name":"designing sofa"},
    {"price": 2000}]
    const list=fur.map(abc=><h4>{abc.name}{abc.price}</h4>)
    console.log(list)
  return (
   <div>
     <h1>Furniture Shop</h1>
     {list}
   </div>
  );
  
}

export default App;
