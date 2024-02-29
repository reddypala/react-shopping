import { useState } from "react";
import Card1 from "./Card1";
import { useEffect } from "react";
import Dropdown from "./DropDown";


export function LoadProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            loadCategories();

    }, [])

    function loadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                
            })
    }
   
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h1>Categories Dropdown</h1>
                    <Dropdown options={categories}></Dropdown>
                </div>
                <div className="col-8 d-flex flex-wrap">
                    {
                        products.map(product =>
                            <Card1 image={product.image} title={product.title} />
                        )
                    }
                </div>
            </div>

        </div>
    )
}