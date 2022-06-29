import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext, TokenContext } from "../utils/context";
import Homepage from "../pages/Homepage";
import Login from "../pages/auth/Login";
import Detailbook from "../pages/Detailbook";
import Signup from "../pages/auth/Signup";
import Checkout from "../pages/Checkout";

const Router = () => {
    const [token, setToken] = useState(null);
    const jwtToken = useMemo(() => ({ token, setToken }), [token]);
    useEffect(() => {
        const getToken = localStorage.getItem("token") || "0";
        setToken(getToken);
    }, [token]);

    if (token) {
        return (
        <TokenContext.Provider value={jwtToken}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/:category" element={<Homepage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/detail/:book_id" element={<Detailbook />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
        )
    }
}

export default Router