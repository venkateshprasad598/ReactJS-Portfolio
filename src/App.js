import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/LandingPage/About/About";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <LandingPage />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
