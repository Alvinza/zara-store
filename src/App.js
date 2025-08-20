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
  const [users, setUsers] = useState([]); // Store registered users 
  const [loggedInUser, setLoggedInUser] = useState(null);  // Track the currently logged-in user

   // Function to handle user registration
  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); 
  };

  // Function to handle logout
  const handleLogout = () => setLoggedInUser(null); 

  return (
    <div className="App">
      <Header username={loggedInUser?.username} onLogout={handleLogout} />
  
      {/* Show welcome message if user is logged in */}
      {loggedInUser && (
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>
          Welcome, {loggedInUser.username} 👋
        </h2>
      )}

        {/* Routes control what page/component is displayed */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login users={users} onLogin={setLoggedInUser} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
