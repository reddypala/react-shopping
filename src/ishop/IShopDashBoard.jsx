import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";

export default function IShopDashBoard(){

    let navigate = useNavigate();
    const [cookie,setCookie,removeCookie] = useCookies();
    const [userId,setUserId] = useState();
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        if(cookie["userId"]===undefined){
            navigate("/login");
        }else{
            setUserId(cookie["userId"]);
            loadCategories();
        }
        
    },[])

    function handleSignout(){
        removeCookie("userId");
        navigate("/login");
    }
    function loadCategories(){
        axios.get("http://localhost:4000/getcategories").then(response=>{setCategories(response.data)})
    }

    return(
        <div>
            <h2>User Dashboard {userId} - <button className="btn btn-link" onClick={handleSignout}>Signout</button> </h2>
            <h3>Product Categories</h3>
            <ol>
                {
                    categories.map(item=>
                        <li key={item.category}><Link to={"/products/"+item.category}>{item.category.toUpperCase()}</Link></li>    
                    )
                }
            </ol>
        </div>
        
    )
}