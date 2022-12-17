import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import UserProfilePage from "./pages/Auth/UserProfilePage.jsx";
import NavbarTop from "./general-components/NavbarTop/NavbarTop.jsx";
import {Container} from "react-bootstrap";

const Router = () => {

    return (
        <div>

            <NavbarTop />

            <Container className={"py-3"}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/signIn"} element={<RegisterPage />} />
                    <Route path={"/userProfile"} element={<UserProfilePage />} />
                </Routes>
            </Container>
        </div>
    );
};

export default Router;
