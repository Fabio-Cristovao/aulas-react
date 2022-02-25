import logo from './logo.svg';
import './App.css';
import LightbulbSvg from './components/Lightbulb';

function App() {

  const [on, seton] = useState(false)
  const [first, setfirst] = useState(second)
  return (
    <div className="App">
      <LightbulbSvg fillColor={fillColor} />
      <button onCLick={handleEnergy}>On/Off</button>
    </div>
  );
}

export default App;
