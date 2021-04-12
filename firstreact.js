import React from 'react'
import './App.css';

function App() {
  const fur = [{
    "name":"Morwal's Decor Ansyie Wing Chair",
    "price":5499,
    "image":"https://images-na.ssl-images-amazon.com/images/I/61u6mL8zdNS._SL1000_.jpg"
  },
  {
    "name":"Novelty Compact Plastic Cupboard with Shelf",
    "price":2565,
    "image":"https://images-na.ssl-images-amazon.com/images/I/71oGJxicl5L._SL1500_.jpg"
  },
  {
    "name":"White House Furniture Center Table",
    "price":9000,
    "image":"https://images-na.ssl-images-amazon.com/images/I/3166WhvHxmL.jpg"
  },
  {
    "name":"Dime Store Interlock Wall Mount Wall Shelf Three Shelves for Living Room ",
    "price":695,
    "image":"https://images-na.ssl-images-amazon.com/images/I/51sNdFeLQYL._SL1000_.jpg"
  },
  {
    "name":"Dime Store Wooden Book Shelf for Study Room Living Room Bedroom Home Library Kids Books Shelf Stand",
    "price":945,
    "image":"https://images-na.ssl-images-amazon.com/images/I/61QJu2uF1uL._SL1500_.jpg"
  },
  {
    "name":"Solimo Vega Engineered Wood Espresso Finish Hydraulic Half Lift-on Queen Bed (Brown)",
    "price":19000,
    "image":"https://images-na.ssl-images-amazon.com/images/I/81-fISsuL0L._SL1500_.jpg"
  },
  {
    "name":"Solimo Cyrus Glossy Metal King Bed (Black)",
    "price":8000,
    "image":"https://images-na.ssl-images-amazon.com/images/I/81xx2cUwLdL._SL1500_.jpg"
  }
]
    const list=fur.map(abc=> 
    <div>
    <img src={abc.image} alt="" height="300px" width="500px"></img><br></br>
    <h4>Name:{abc.name}</h4>
    <h5>Price:{abc.price}</h5></div>)

    console.log(list)
    return (
   <div>
     <h1>Furniture Shop</h1><hr></hr>
     {list}
     
   </div>
  );
  
}

export default App;
