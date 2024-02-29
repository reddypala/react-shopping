import { useState, useEffect } from "react";

export default function FetchData() {

    const [products, setProducts] = useState([]);

    function loadProducts() {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data =>
                setProducts(data)
            );
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <div className="container-fluid">
            <section className="row">
                <main className="col-3 d-flex flex-wrap overflow-auto w-25" style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div className="card">
                                <div className="card-header">
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <img src={product.image} height="150" className="card-img-top" alt="#" />
                                </div>
                                <div className="card-footer">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} <span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        )
                    }

                </main>
            </section>
        </div>
    )
}

