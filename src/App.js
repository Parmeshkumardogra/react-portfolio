import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import TechStack from "./components/TechStack";
import Experience from "./components/Experience"
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <TechStack/>
    <Experience/>
    <Contact/>
    </div>
  );
}

export default App;
