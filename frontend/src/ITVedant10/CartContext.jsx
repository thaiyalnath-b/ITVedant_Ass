import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();
const initialState = {
    items: [],
};
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const existing = state.items.find((i) => i.id === action.payload.id);
            if (existing) {
                return { ...state, items: state.items.map((i) => i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i), };
            } else { return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }; }
        case "REMOVE_ITEM":
            return {
                ...state, items: state.items.filter((i) => i.id !== action.payload.id),
            };
        case "UPDATE_QUANTITY":
            return {
                ...state, items: state.items.map((i) => i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i),
            };
        default:
            return state;
    }
}
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    );
}
export function useCart() {
    return useContext(CartContext);
}