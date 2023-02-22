import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signup from "./user/Signup";
import Login from "./user/Login";
import Main from "./Contents/Main";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={'/main'} replace />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
