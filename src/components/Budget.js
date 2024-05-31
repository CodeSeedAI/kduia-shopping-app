import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {
        dispatch, 
        budget,
        CartValue,
        currency
    } = useContext(AppContext);

    const changeBudget = (val) => {
        
        if(parseInt(val) < parseInt(CartValue)){
            alert(`You can not reduce the budget value lower then the spending`)

            return false;
        }

        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        })
    }
    
  return (
        <div className='alert alert-secondary'>
            <span>Budget</span>
            {currency}
            <input 
                value={budget}
                name="budget"
                type="number"
                id='budget'
                onChange={event => changeBudget(event.target.value)}
            ></input>
    </div>
    );
};

export default Budget;