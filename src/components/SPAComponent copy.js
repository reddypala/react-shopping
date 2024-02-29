import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


function HTML() {
    return (
        <main>
            <h2>HTML</h2>
            <p>It is a markup language</p>
        </main>
    )
}

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
                <Routes>
                    <Route path="html" element={

                        HTML

                    }></Route>
                    <Route path="css" element={
                        <main>
                            <h2>CSS</h2>
                            <p>It defines styles for elements</p>
                        </main>

                    }></Route>
                    <Route path="javascript" element={
                        <main>
                            <h2>JAVASCRIPT</h2>
                            <p>It is a programming language</p>
                        </main>

                    }></Route>
                    <Route path="/" element={
                        <main>
                            <h2>Home</h2>
                            <p>Tutorial Home</p>
                        </main>

                    }></Route>
                    <Route path="*" element={
                        <main>
                            <code>Not Found: Page You Requested</code>
                        </main>
                    }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}