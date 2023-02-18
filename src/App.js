import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from "./user/Signup";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<>asdf</>} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
