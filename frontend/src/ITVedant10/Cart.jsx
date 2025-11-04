import React from "react";
import { useCart } from "./CartContext";

function Cart() {
    const { state, dispatch } = useCart();
    const { items } = state;
    const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
    const updateQuantity = (id, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> - ${item.price} * {" "}
                            <input type="number" value={item.quantity} min="1" onChange={
                                (e) => updateQuantity(item.id, parseInt(e.target.value))
                            } />
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart