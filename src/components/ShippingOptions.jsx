import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShippingMethod } from '../redux/actions';

const ShippingOptions = () => {
  const dispatch = useDispatch();
  const { shippingOptions, selectedShipping } = useSelector((state) => state); // Get shipping state from Redux

  // handle selection of a shipping method
  const handleSelect = (option) => {
    dispatch(setShippingMethod(option));
  };

  return (
    <div>
      <h5 style={{color: 'grey'}}>Select Shipping Method</h5>
      {/* Map over available shipping options */}
      {shippingOptions.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            name="shipping"
            checked={selectedShipping?.id === option.id} // Check if this option is selected
            onChange={() => handleSelect(option)} // Update selected option in Redux
            className='m-2' 
          />
          {option.name}  R{option.cost}
        </div>
      ))}
    </div>
  );
};

export default ShippingOptions;
