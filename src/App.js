import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/logIn" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signUp" />} />
      </Routes>
    </div >
  );
}

export default App;
