import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function TutorialRoutes() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                    <Route path="html" element={
                        <main>
                            <h2>HTML</h2>
                            <p>It is a markup language</p>
                        </main>

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}