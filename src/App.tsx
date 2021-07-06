import "./App.css";
import Card from "./Cards";

function App() {
  return (
    <div className="App">
      <header role="heading" aria-level={1} className="App-header">
        <p>
          Emerson React Coding Challenge
        </p>
      </header>
      <div>
        {
          <Card />
        }
      </div>
    </div>
  );
}

export default App;
