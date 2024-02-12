import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import NavPage from "./components/Navigation/NavPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Navigation/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NavPage />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
