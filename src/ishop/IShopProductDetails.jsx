import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function IShopProductDetails() {

    const [product, setProduct] = useState([]);
    let params = useParams();

    useEffect(() => {
       
        axios.get("http://localhost:4000/getproduct/"+params.id).then(response => {
            setProduct(response.data);
        })
    },[])
    return (
        <div>
            <h2>Product Details-{params.id}</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product[0].title}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product[0].image} alt="#" width="100" height="100" />
                </dd>
                <dt>Price</dt>
                <dd>{product[0].price}</dd>
                <dt>Rating</dt>
                <dd>{product[0].rating.rate}</dd>
            </dl>
            <br />
            <Link to={"/products/"+product.category}>Back to Categories</Link>
        </div>
    )
}