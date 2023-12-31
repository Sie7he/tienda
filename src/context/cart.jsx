import React, { createContext, useReducer, useState } from 'react'

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    const { id } = actionPayload
    const productInCartIndex = state.findIndex(item => item.id === id)
    switch (actionType) {

        case "ADD_TO_CART": {


            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }
            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
        }

        case "REDUCE_FROM_CART": {

          
                const newState = structuredClone(state);
                newState[productInCartIndex].quantity -= 1
                return newState
            
        }

        case "REMOVE_FROM_CART": {
            const { id } = actionPayload
            return state.filter(item => item.id != id)
        }

        case "CLEAR_CART": {
            return initialState
        }
    }
    return state
}

export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    });

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    });

    const reduceFromCart = product => dispatch({
        type: 'REDUCE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
        payload: []
    });


    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            reduceFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}