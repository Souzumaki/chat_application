import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing.js";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Landing />} />
          
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;