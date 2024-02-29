import React from "react";

export default class OneWayClassDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Product Details',
            Name: 'Samsung Tv',
            Price: 56000,
            stock: true,
            cities: ['Delhi', 'Hyd', 'Mumbai'],
            Rating: { rate: 4.5, count: 6700 }
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>stock</dt>
                    <dd>{(this.state.stock === true) ? "Available" : "Out of stock"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.cities.map(city =>
                                    <li key={city}>{city}</li>

                                )
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className="bi bi-star-fill text-success"></span>[{this.state.Rating.rate}] [{this.state.Rating.count}]
                    </dd>
                </dl>
            </div>
        )
    }
}