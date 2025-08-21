import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import add from "../assets/add.png";
import logoutIcon from "../assets/quit.png";
import { useCart } from "../context/CartContext";
import addCart from "../assets/add-to-cart.png";

function Header({ username, onLogout }) {
  const { cart } = useCart();
  return (
    // Navbar section
    <div className="headerNav">
      <Navbar
        bg="white"
        style={{ padding: "40px", paddingRight: "4rem" }}
        className="fixed-top"
      >
        <div className="logo">
          <img
            src={logo}
            style={{
              marginLeft: "1rem",
              marginRight: "2rem",
              cursor: "pointer",
            }}
            alt="logo"
          />
        </div>
        {/* Navbar links */}
        <Nav className="mr-auto mylinks">
          <Link to="/" className="nav-link">
            {" "}
            Home
          </Link>
          <Link to="/store" className="nav-link">
            Store{" "}
          </Link>
          <Link to="/cart" className="nav-link mycart">
            Cart
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/cart">
            <img
              src={addCart}
              alt=""
              style={{ width: "25px", marginBottom: "5px" }}
            />{" "}
            ({cart.length})
          </Link>
        </Nav>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            
          }}
        >
          {username ? (
            <div className="welcome"> 
              
              <div className="login-md-screen">
              <span className="welcomeMessage">Hi {username}!</span>
              <a
                href="#register"
                onClick={onLogout}
                
                className="btn btn-outline-secondary"
              >
                Logout <img src={logoutIcon} alt="" style={{ width: "18px" }}/>
              </a>
              </div>
              
              <a href="/register"><img src={logoutIcon} alt="" style={{ width: "24px" }} className="loginIcon-md-screen" /></a>
            </div>
          ) : (
            <span>
              <a href="/register">
                <img src={add} alt="" style={{ width: "28px" }} />
              </a>
            </span>
          )}
        </header>
      </Navbar>
    </div>
  );
}

export default Header;
