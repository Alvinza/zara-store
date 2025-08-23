import React from "react";

function Footer() {
  return (
    <footer className="text-black mt-5" style={{ backgroundColor: "#ffb766" }}>
      <div className="container py-4">
        <div className="row text-center text-md-start">
          
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We provide quality products at affordable prices.
              Your satisfaction is our priority.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/women" className="text-black text-decoration-none">Women</a></li>
              <li><a href="/men" className="text-black text-decoration-none">Men</a></li>
              <li><a href="/jewellery" className="text-black text-decoration-none">Jewellery</a></li>
              <li><a href="/shoes" className="text-black text-decoration-none">Shoes</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: support@zara.com</p>
            <p>Phone: +27 123 456 789</p>
            <p>Address: Cape Town, South Africa</p>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-light">
          <p className="mb-0">&copy; {new Date().getFullYear()} ZARA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
