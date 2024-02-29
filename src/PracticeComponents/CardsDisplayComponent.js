import { useEffect, useState } from "react";
import CardComponentDemo from "./CardComponent";

function CardsDisplay() {
    const [products, setProducts] = useState([]);

    function loadProducts() {
        fetch("http://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            }

            )
    }
    useEffect(() => {
        loadProducts();
    }, [])
    return (
        <div className="d-flex flex-wrap">
            {
                products.map(product=>
                    <CardComponentDemo  product={product}/>
                )
            }
        </div>

    )
}

export default CardsDisplay;