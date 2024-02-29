import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


export default function SPAComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/javascript">JAVASCRIPT</Link></li>
                    </ul>
                </nav>
                <hr />
            </BrowserRouter>
        </div>
    )
}