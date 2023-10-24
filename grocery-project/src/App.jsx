import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Itemlist from "./components/Itemlist";
import Additems from "./components/Additems";
import { useState } from "react";

function App() {
  const [items, setitems] = useState([]);

  let addItem = (item) => {
    setitems((items) => [...items, item]);
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Additems addItem={addItem} />
          <Itemlist items={items} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
