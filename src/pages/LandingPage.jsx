import React from 'react';
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        // Home page
        <div className="home">
            <div className="hero">
            <h1>Welcome to Zara Best Clothing</h1>
            <p>Choose style, not just clothes!</p> 
            <Link to='/store' className='btn btn-outline-secondary'
             style={{color: 'white', fontSize: '18px'}}>Products</Link>
        </div>
        </div>
    );
}

export default LandingPage;
