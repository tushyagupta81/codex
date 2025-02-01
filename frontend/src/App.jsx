import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Communities from "./pages/Communities";
import Doctors from "./pages/Doctors";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
