import { useFetchData } from "./useFetchData";
import React from 'react';

export function CustomHook() {

    const products = useFetchData("http://fakestoreapi.com/products");
    return (
        <div className="container-fluid">
            <h2>Product titles list</h2>
            <ol>
                {
                    products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                }
            </ol>
        </div>
    )
}