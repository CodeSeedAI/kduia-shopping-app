import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">UK(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="$">US($)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;