import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Itemlist from "./components/Itemlist";
import Additems from "./components/Additems";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Additems />
          <Itemlist />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
