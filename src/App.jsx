import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Extra from "./extra/Extra";
import Header from "./header/Header";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>
        <Companies />
        <Residencies/>
        <Value/>
      </div>
    </>
  );
}

export default App;
