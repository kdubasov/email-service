import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import {Form} from "react-bootstrap";
import useTheme from "./hooks/useTheme.js";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import UserProfilePage from "./pages/Auth/UserProfilePage.jsx";

const Router = () => {

    const {type,setType} = useTheme();

    return (
        <div>

            {/*переключатель темы*/}
            <Form.Check
                type="switch"
                label="Dark theme"
                onChange={() => setType(type === "light" ? "dark" : "light")}
            />

            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/signIn"} element={<RegisterPage />} />
                <Route path={"/userProfile"} element={<UserProfilePage />} />
            </Routes>
        </div>
    );
};

export default Router;
