import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Proyects from "./components/proyects/Proyects"
import Contact from "./components/contact/Contact"
import "./App.scss"

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
    <Intro/>
    <Proyects/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
