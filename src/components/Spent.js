import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { dispatch, Location} = useContext(AppContext);

  return (
        <div className='alert alert-secondary'>
            <span>Spent so far: {Location}</span>

    </div>
    );
};

export default Spent;