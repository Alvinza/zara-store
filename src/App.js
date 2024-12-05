import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import StorePage from "./pages/StorePage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Help from "./components/Help.jsx";

function App() {

  // Array of registered users
  const [users, setUsers] = useState([]); 
  
  // Current logged-in user
  const [loggedInUser, setLoggedInUser] = useState(null); 
  
  // Add new user to states
  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); 
  };

  // Logout handler
  const handleLogout = () => setLoggedInUser(null); 

  return (
        <div className="App">
      <Header username={loggedInUser?.username} onLogout={handleLogout} />
      {loggedInUser ? (
        <h2 style={{ textAlign: "center", display: "none" }}>
          Welcome, {loggedInUser.username}
        </h2>
      ) : (
        <div>
          <Register onRegister={handleRegister} />
          <Login users={users} onLogin={setLoggedInUser} />
        </div>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div> 
  );
}

export default App;
