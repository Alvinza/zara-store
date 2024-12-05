import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    // help section
    <div className="help-container">
      <h2>Shipping Details</h2>
      <p>
        <strong>Standard Shipping:</strong> Takes 5-7 business days.
      </p>
      <p>
        <strong>Express Shipping:</strong> Takes 1-3 business days.
      </p>

      <p>
        <strong>FreE Shipping</strong> Takes 8-12 business days.
      </p>
      <Link to={'/cart'} className='btn btn-outline-secondary'>Close</Link>
    </div>
  );
}

export default Help;
