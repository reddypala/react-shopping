import { useState } from "react";

export default function TwoWayBinding() {
    const [product, setProduct] = useState({ Name: '', price: 0, city: '', stock: false });
    const[newProduct,setNewProduct] = useState({ Name: '', price: 0, city: '', stock: false });
    function handleName(e) {
        setProduct({
            Name: e.target.value,
            price: product.price,
            city: product.city,
            stock: product.stock
        })
    }
    function handlePrice(e) {
        setProduct({
            Name: product.Name,
            price: e.target.value,
            city: product.city,
            stock: product.stock
        })
    }
    function handleCity(e) {
        setProduct({
            Name: product.Name,
            price: product.price,
            city: e.target.value,
            stock: product.stock
        })
    }
    function handleStock(e) {
        setProduct({
            Name: product.Name,
            price: product.price,
            city: product.city,
            stock: e.target.checked
        })
    }
    function handleRegisterClick(){
        setNewProduct(product);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleName} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePrice} className="form-control" /></dd>
                        <dt>city</dt>
                        <dd>
                            <select className="form-select" onChange={handleCity}>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox" onChange={handleStock} className="form-check-input" /> Available
                        </dd>
                    </dl>
                    <button onClick={handleRegisterClick} className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>price</dt>
                        <dd>{newProduct.price}</dd>
                        <dt>city</dt>
                        <dd>{newProduct.city}</dd>
                        <dt>stock</dt>
                        <dd>{(newProduct.stock === true) ? "Available" : "Out of stock"}</dd>
                    </dl>
                </div>

            </div>
        </div>
    )
}