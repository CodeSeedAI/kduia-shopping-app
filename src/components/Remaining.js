import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { 
        currency, 
        budgetLeft 
    } = useContext(AppContext);
    
  return (
        <div className='alert alert-secondary'>
            <span>Remaining: {currency}{budgetLeft}</span>
        </div>
    );
};

export default Remaining;