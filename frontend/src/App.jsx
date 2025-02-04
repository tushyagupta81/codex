import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from './pages/About'
import Communities from "./pages/Communities"
import Doctors from './pages/Doctors';
import Resources from './pages/Resources';
import Footer from "./components/Footer";
import ParentSignUp from "./pages/parentsignup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/SignUp" element={<ParentSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />

      </Routes>
      
      <Footer />
      </>
  );
}

export default App;

