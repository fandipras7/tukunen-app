import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Index";
import Login from "../../pages/Login/Index";
import Register from "../../pages/Register/Index";
import ResetPassword from "../../pages/ResetPassword/Index";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/reset" element={<ResetPassword/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;