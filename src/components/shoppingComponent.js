import { useState, useEffect } from "react";

export default function ShoppingComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setCount] = useState(0);

    function GetCartItemsCount() {
        setCount(cartItems.length);
    }


    function loadCategories() {
        fetch('http://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                setCategories(data);
            })
    }

    function loadProducts(url) {
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
        alert('Added item to Cart')
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItems.push(data);
                GetCartItemsCount();
            })


    }

    //component initialization using "useEffect"
    useEffect(() => {
        loadCategories();
        loadProducts("http://fakestoreapi.com/products");
    }, [cartItems.length])
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center m-2 p-2">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option key={category}>{category}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card p-2 m-2 w-25" width="200px">
                                <img src={product.image} height="150" className="card-img-top" alt="#" />
                                <div className="card-header" style={{ height: '160px' }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body ">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.image.rate} <span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddToCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }

                </main>
                <aside className="col-2">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span>[{itemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>price</th>
                                <th>image</th>
                            </tr>
                        </thead>
                        {
                            cartItems.map(item =>
                                <tbody>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} alt="item" width="50" height="50" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
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
        </div>

    )
}