import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];

    switch (action.type) {
        case 'ADD_QUANTITY':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = expense.budget + action.payload.budget;
                }
                new_expenses.push(expense);
                return true;
            })

            state.expenses = new_expenses;
            action.type = "DONE";

            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.budget = expense.budget - action.payload.budget;
                    }
                    expense.budget = expense.budget < 0 ? 0: expense.budget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";

                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";

            return {
                ...state,
            };
    case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;

            return {
                ...state
            }
    case 'CHG_BUDGET':
        action.type = "DONE";
        state.budget = action.payload;

        return {
            ...state
        }

    default:
        return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', "budget": 1050, "unit price": 500 },
        { id: "Finance", name: 'Finance', budget: 300, unitprice: 300 },
        { id: "Sales", name: 'Sales', budget: 70, unitprice: 400 },
        { id: "Human Resources", name: 'Human Resources', budget: 40, unitprice: 600 },
        { id: "IT", name: 'IT', budget: 500, unitprice: 200 },
    ],
    currency: '£',
    budget: 2000,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    let budgetLeft = 0;

    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.budget);
        }, 0);
                
        budgetLeft = state.budget - totalExpenses;

        state.CartValue = totalExpenses;
        state.budgetLeft = budgetLeft
    }
    
    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                currency: state.currency,
                budget: state.budget,
                budgetLeft: state.budgetLeft
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};