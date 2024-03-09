import "./App.css";
import Companies from "./components/companies/Companies";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
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
        <Contact/>
        <GetStarted/>
      </div>
    </>
  );
}

export default App;
