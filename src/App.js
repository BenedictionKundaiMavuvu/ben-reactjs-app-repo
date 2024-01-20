import "./App.css";
import CatFact from "./Components/CatFact";
import Routing from "./Components/Routing";

const App = () => {
  return (
    <div className="App">
      <Routing />
      <CatFact />
    </div>
  );
};

export default App;
