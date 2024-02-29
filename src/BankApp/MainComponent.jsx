import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankAppHome from "./BankAppHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";
import NriLogin from "./NRI/NriLogin";
import NriRegister from "./NRI/NriRegister";
import PersonalHome from "./Personal/PersonalHome";
import NRIHome from "./NRI/NriHome";


export default function MainComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BankAppHome />}>
                        <Route path="personal" element={<PersonalHome />}>
                            <Route path="plogin" element={<PersonalLogin/>}></Route>
                            <Route path="pregister" element={<PersonalRegister/>}></Route>
                        </Route>
                        <Route path="nri" element={<NRIHome />}>
                        <Route path="nlogin" element={<NriLogin/>}></Route>
                            <Route path="nregister" element={<NriRegister/>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}