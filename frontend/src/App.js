import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/project";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="project" element={<Project />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
