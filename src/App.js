import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import StorePage from "./components/StorePage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Help from "./components/Help.jsx";
import Women from "./components/Women.jsx";
import Men from "./components/Men.jsx";
import Jewellery from "./components/Jewellery.jsx";
import Shoes from "./components/Shoes.jsx";
import Footer from "./components/Footer.jsx";

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

        {/* Routes control what page/component is displayed */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login users={users} onLogin={setLoggedInUser} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewellery" element={<Jewellery />}/>
        <Route path="/shoes" element={<Shoes />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
