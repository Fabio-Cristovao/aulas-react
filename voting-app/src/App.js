import "./App.css";
import ProductList from "./components/ProductList";
import ClassComponent from "./classVSfunction/ClassComponent";
import FuncComponent from "./classVSfunction/FuncComponent";

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      <ClassComponent />
      <FuncComponent />
    </div>
  );
}

export default App;
