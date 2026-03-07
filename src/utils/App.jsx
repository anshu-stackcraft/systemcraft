import nav from "./components/layout/Nav";
import home from "../page/Home";


function App() {
  return (
    <div className="App">
      {nav()}
      {home()}
    </div>
  );
}

export default App;