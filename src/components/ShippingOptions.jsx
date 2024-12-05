import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShippingMethod } from '../redux/actions';

const ShippingOptions = () => {
  const dispatch = useDispatch();
  const { shippingOptions, selectedShipping } = useSelector((state) => state);

  const handleSelect = (option) => {
    dispatch(setShippingMethod(option));
  };

  return (
    <div>
      <h5 style={{color: 'grey'}}>Select Shipping Method</h5>
      {shippingOptions.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            name="shipping"
            checked={selectedShipping?.id === option.id}
            onChange={() => handleSelect(option)}
          />
          {option.name}  R{option.cost}
        </div>
      ))}
    </div>
  );
};

export default ShippingOptions;
