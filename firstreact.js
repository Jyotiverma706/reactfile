
import './App.css';

function App() {
  const fur = [
    {
      "name": "Furniture Cafe Wooden Intersecting Wall Mounted Shelf"
    },
    { "price": 2000 },
    {'src':'https://www.amazon.in/Furniture-Wooden-Intersecting-Shelves-Living/dp/B07F5T7B71/ref=sr_1_5?crid=14LANL9YD4DNK&dchild=1&keywords=furnitures+for+home&qid=1618149451&sprefix=furniture%2Caps%2C806&sr=8-5'},
    {
      "name": "Scuzo Microfiber Chair Pad Cushion, 48 x 16 Inches, Blue , Pack of 1designing sofa"
    },
    { "price": 2000 },
    {'src':'https://www.amazon.in/Exclusive-Relaxing-Cushion-Rocking-Outdoor/dp/B08G88CZQJ/ref=sr_1_20?crid=14LANL9YD4DNK&dchild=1&keywords=furnitures+for+home&qid=1618149451&sprefix=furniture%2Caps%2C806&sr=8-20'},
      {
      "name": "designing sofa"
    },
    { "price": 2000 },
    {'src':'https://www.amazon.in/Furniture-Wooden-Intersecting-Shelves-Living/dp/B07F5T7B71/ref=sr_1_5?crid=14LANL9YD4DNK&dchild=1&keywords=furnitures+for+home&qid=1618149451&sprefix=furniture%2Caps%2C806&sr=8-5'},
        {
      "name": "designing sofa"
    },
    { "price": 2000 },
    {'src':'https://www.amazon.in/Furniture-Wooden-Intersecting-Shelves-Living/dp/B07F5T7B71/ref=sr_1_5?crid=14LANL9YD4DNK&dchild=1&keywords=furnitures+for+home&qid=1618149451&sprefix=furniture%2Caps%2C806&sr=8-5'},
          {
      "name": "designing sofa"
    },
    { "price": 2000 }
    {'src':'https://www.amazon.in/Furniture-Wooden-Intersecting-Shelves-Living/dp/B07F5T7B71/ref=sr_1_5?crid=14LANL9YD4DNK&dchild=1&keywords=furnitures+for+home&qid=1618149451&sprefix=furniture%2Caps%2C806&sr=8-5'},]
    const list=fur.map(abc=><div>{abc.src}<h4>{abc.name}{abc.price}</h4></div>)
    console.log(list)
  return (
   <div>
     <h1>Furniture Shop</h1>
     {list}
   </div>
  );
  
}

export default App;
