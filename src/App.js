import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from "./user/Signup";
import Login from "./user/Login";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<>asdf</>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
