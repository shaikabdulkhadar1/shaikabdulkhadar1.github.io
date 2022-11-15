import "./App.css";
import "./fonts/Alliance.otf";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
