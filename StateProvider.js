import React, { createContext, useContext, useReducer } from'react'

// Prepare data Layer
export const StateContext = createContext ();

//wrap oour App and provider data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);