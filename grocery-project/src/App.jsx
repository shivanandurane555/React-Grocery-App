import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Itemlist from "./components/Itemlist";
import Additems from "./components/Additems";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  let addItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem =(id)=>{
   setItems(items => {
    return items.filter(item => item.id !== id)
   })
  }

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Additems addItem={addItem} />
          <Itemlist items={items} deleteItem={deleteItem} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
