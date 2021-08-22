import Lottery from "./components/Lottery"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottery title="Lotto!" maxBalls="9" maxNum="8" />
        
        <Lottery title="Mini-draw" maxBalls="5" maxNum="10" />
      </header>
    </div>
  );
}

export default App;
