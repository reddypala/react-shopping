import { useState, useEffect } from "react";

export default function ShoppingDemo() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartitems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const loadCategories = () => {
        fetch(`http://fakestoreapi.com/products/categories`)
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                setCategories(data);
            })
    }

    function GetCartItemsCount() {
        setItemsCount(cartItems.length)
    }
    const loadProducts = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }

    function handleCategoryChange(e) {
        if (e.target.value === 'all') {
            loadProducts(`http://fakestoreapi.com/products`);
        } else {
            loadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function handleAddToCart(e) {
        alert('Item added to cart');
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItems.push(data);
                GetCartItemsCount();
            })
    }
    function handleDeleteButton(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response=>response.json())
        .then(data=>{
            cartItems.pop();
        })
    }

    useEffect(() => {
        loadCategories();
        loadProducts(`http://fakestoreapi.com/products`);
    }, [cartItems.length])

    return (
        <body className="container-fluid">
            <header className="bg-danger text-white mt-2 p-1 text-center">
                <h3>
                    <span className="bi bi-cart4"></span> Shopping Home
                </h3>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select Category</label>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category =>
                                    <option key={category}>{category}</option>
                                )
                            }
                        </select>
                    </div>
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card p-2 m-2 w-25" width="200">
                                <img src={product.image} className="card-img-top" alt="productImage" height="150" />
                                <div className="card-header">
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            {product.rating.rate}
                                            <span className="bi bi-star-fill text-success"></span>
                                            <span>{product.rating.count}</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddToCart} className="bi bi-cart3 btn btn-danger">Add to Cart</button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-3 ">
                    <button className="btn btn-danger w-50">
                        <span className="bi bi-cart3"></span>[{itemsCount}]Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Price</td>
                                <td>image</td>
                                <td>
                                    <button className="btn btn-danger">
                                        <span className="bi bi-trash"></span>
                                    </button>
                                </td>
                            </tr>

                        </thead>
                        {
                            cartItems.map(item =>
                                <tbody>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" alt="item" />
                                        </td>
                                        <td>
                                            <button onClick={handleDeleteButton} className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </aside>

            </section>

        </body>



    )





}