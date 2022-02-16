import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
