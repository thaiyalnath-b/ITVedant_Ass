import React from "react";
import {useCart} from "./CartContext";

const products = [
    {id:1, name: "iphone 15", price: 799},
    {id:2, name: "iphone 14", price: 699},
    {id:3, name: "iphone 13", price: 599},
];

function ProductList() {
    const {dispatch} = useCart();

    const addToCart = (product) => {
        dispatch({type: "ADD_ITEM", payload: product });
    };

    return (
        <div className="products">
            <h2>Products</h2>
            {products.map((p)=> (
                <div key={p.id} className="product-card">
                    <h3>{p.name}</h3>
                    <p>Price: {p.price}</p>
                    <button onClick={()=> addToCart(p)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
