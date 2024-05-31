import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { dispatch, Location} = useContext(AppContext);

  return (
        <div className='alert alert-secondary'>
            <span>Remaining: {Location}</span>

    </div>
    );
};

export default Remaining;