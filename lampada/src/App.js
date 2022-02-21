import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LightbulbSv} from './components/Lightbulb';


function App() {

  export default function App() {

    const {light, setLight} = useState(false);

    let fillColor = light ? 'gold' : 'gray';
    return (
      <div>App</div>
    )
  }
  
  return (
    <div className="App">
      <h1>lampada</h1>
      <section>
        <LightbulbSvg fillColor=`${fillColor}`/>
      </section>
     
    </div>
  );
}

export default App;
