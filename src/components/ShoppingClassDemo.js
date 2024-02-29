import React from "react";
import  CardComponent  from "./CardComponent";

export default class ShoppingClassDemo extends React.Component {
    //derived class constructor
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        }
        //Event binding with state
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    GetCategories() {
        fetch('http://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    categories: data
                })
            )
            
    }
    Getproducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    products: data
                })
            )
            
            
    }

    handleCategoryChange(e) {
        this.Getproducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }
    componentDidMount() {
        this.GetCategories();
        this.Getproducts('http://fakestoreapi.com/products');
    }
    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger text-white text-center mt-3 p-2">
                    <h1><span className="bi bi-cart4"></span> Shopping Cart</h1>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <div>
                            <label>Select Category</label>
                            <select className="form-select" onChange={this.handleCategoryChange}>
                                {
                                    this.state.categories.map(category =>
                                        <option key={category}>{category}</option>
                                    )
                                }
                            </select>
                        </div>
                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                this.state.products.map(product =>
                                    // <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                                    //     <img src={product.image} className="card-img-top" height="150" alt="ipic"></img>
                                    //     <div className="card-header" style={{ height: '160px' }}>
                                    //         <p>{product.title}</p>
                                    //     </div>
                                    // </div>
                                    <CardComponent  key={product.id} product={product}></CardComponent>
                                )
                            }

                        </div>
                    </main>
                </section>
            </div>
        )
    }
}