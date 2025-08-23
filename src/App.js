import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import StorePage from './components/StorePage';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Help from './components/Help.jsx';
import Women from './components/Women.jsx';
import Men from './components/Men.jsx';
import Jewellery from './components/Jewellery.jsx';
import Shoes from './components/Shoes.jsx';
import Footer from './components/Footer.jsx';
import SearchModal from './components/SearchModal';

function App() {
  const [users, setUsers] = useState([]); // Store registered users
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the currently logged-in user
  const [showSearch, setShowSearch] = useState(false); // control search modal

  // 🔹 On first load, check if users & logged-in user exist in localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    const savedUser = localStorage.getItem('loggedInUser');

    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedUser) setLoggedInUser(JSON.parse(savedUser));
  }, []);

  // 🔹 Handle login
  const handleLogin = (user) => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  // 🔹 Handle logout
  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  // 🔹 Handle register (also save to localStorage)
  const handleRegister = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };
  
  // ✅ Combine all products (expand this when you add men/women/shoes arrays)
  const allProducts = [...products, ...jewelleryGallery /* , ...menProducts, ...womenProducts, ...shoesProducts */];

  return (
    <div className="App">
      <Header 
        username={loggedInUser?.username} 
        onLogout={handleLogout} 
        onSearchClick={() => setShowSearch(true)} // pass modal trigger
      />

      {/* Routes control what page/component is displayed */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={<Login users={users} onLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/help" element={<Help />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
             {/* 🔍 Search Modal */}
      <SearchModal 
        show={showSearch} 
        handleClose={() => setShowSearch(false)} 
        allProducts={allProducts} 
      />
      <Footer />
    </div>
  );
}

export default App;
