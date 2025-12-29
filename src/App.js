import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";

/* Pages */
import Home from "./pages/Home";
import SmallBusiness from "./pages/SmallBusiness";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* Styles */
import "./styles/site.css";

function App() {
  return (
    <Router>
      {/* Global Navigation */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/small-business" element={<SmallBusiness />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
