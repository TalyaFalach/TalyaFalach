import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import Main from "./Pages/MainPage/Main";
import NavbarComponent from "./Components/NavComponent/Navbar";
import About from "./Components/AboutComponent/About";
import MyProjects from "./Components/MyProjectsComponent/MyProjects";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Components/GalleryComponent/Gallery";
import Contact from "./Components/ContactComponent/Contact";

function App() {
  return (
    <div className="App bg-dark">
      <NavbarComponent />
      <hr className="text-light bg-light" />
      <About />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
