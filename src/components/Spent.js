import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { 
        currency, 
        CartValue 
    } = useContext(AppContext);

  return (
        <div className='alert alert-secondary'>
            <span>Spent so far: {currency}{CartValue}</span>

    </div>
    );
};

export default Spent;