import Navbar from "./Navbar.js";
import About from "./About.js";
import Built from "./Built.js";
import Projects from "./Projects.js";
import Yas from "./Yas.js";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Built />
      <Projects />
      <Yas />
    </div>
  );
}

export default App;
