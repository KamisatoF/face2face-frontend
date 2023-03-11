import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";
import { LoginService } from "../api/LoginService";

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setUserData(JSON.parse(localStorage.getItem('userData')));
            setAuthenticated(true);
        }

        setLoading(false);

    }, []);

    async function handleLogin(usuario) {
        try {
            const res = await LoginService.authenticate(usuario);
            const token = res.data;
            console.log(token);
            localStorage.setItem('token', token);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const res2 = await LoginService.getUserDetail(usuario.email);
            const userData = res2.data;
            localStorage.setItem('userData', JSON.stringify(userData));
            setUserData(userData);
            console.log(userData);
            setAuthenticated(true);

            return true;

        } catch (error) {
            console.log(error);
            return false;
        }

    }

    function handleLogout() {
        setAuthenticated(false);
        setLoading(false);
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        api.defaults.headers.common["Authorization"] = undefined;
        setUserData({});
    }



    if (loading) {
        return <h1>loading..</h1>
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin, userData, handleLogout }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };