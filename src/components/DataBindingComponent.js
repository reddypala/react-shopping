
export default function DataBindingComponent() {
    /* var product = {
         Name:'Samsung Tv',
         price:45000.99,
         stock:true
     }*/

    var categories = ["All", "Electronics", "Fashion", "Footwear"];
    var products = [
        { Name: 'Samsung Tv', price: 56000.44 },
        { Name: 'Nike Casuals', price: 4200 }
    ];
    var menu = [
        { category: "Electronics", products: ["samsungTV", "Mobiles", "Refrigerators"] },
        {
            category: "Footwear", products: ["Nike casuals", "Adidas"]
        }
    ];
    var keyCount = 0;
    return (
        <div className="container">

            <h2>Category Details</h2>
            <ol>

                {
                    /* Data Binding Expression */
                    /*Unique key must be there for every react child item*/
                    categories.map(category =>
                        <li key={keyCount++}>{category}</li>
                    )
                }
            </ol>
            <h2>DropDown</h2>
            <select>
                {
                    categories.map(category =>
                        <option key={keyCount++} value={category}>{category}</option>
                    )
                }
            </select>

            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.Name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            <h2>Nested categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li>{item.category}
                            <ul>
                                {
                                    item.products.map(product=>
                                        <li>{product}</li>
                                        )
                                }
                                
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select a Product</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.category} label={item.category}>
                            {
                                item.products.map(product=>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>    
                    )
                }
            </select>
        </div>

    )
}