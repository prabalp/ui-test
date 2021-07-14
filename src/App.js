import "./App.css";
import Benifits from "./components/Benifits/Benifits";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Meet from "./components/Meet/Meet";

function App() {
  return (
    <div className="App">
      {/* navbar
    hero
    ourmission ---- done 
    beneifits
    meetour
    footer */}

      <Hero />
      <Mission />
      <Benifits />
      <Meet />
    </div>
  );
}

export default App;
