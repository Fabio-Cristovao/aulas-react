import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="item">
      <div className="image">
        <img src="images/products/image-aqua.png" />
      </div>
      <div className="middle aligned content">
        <div className="description">
          <a>Fort Knight </a>
          <p> Authentic renaissance actors, devlivered in just two weeks. </p>
        </div>
        <div className="extra">
          <span>Submitted by: </span>
          <img className="ui avatar image" src="images/avatars/daniel.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
