import Lottery from "./components/Lottery"
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottery title="Lotto!" numbBalls="8" maxNum="40" />
        
        <Lottery title="Mini-draw" numbBalls="5" maxNum="10" />
      </header>
    </div>
  );
}

export default App;
