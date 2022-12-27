import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import UserProfilePage from "./pages/Auth/UserProfilePage.jsx";
import NavbarTop from "./general-components/NavbarTop/NavbarTop.jsx";
import {Container} from "react-bootstrap";
import MessageAlert from "./general-components/MessageAlert/MessageAlert.jsx";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage.jsx";
import CheckVerifyEmail from "./general-components/CheckVerifyEmail.jsx";
import AuthCheckRoute from "./pages/Auth/AuthCheckRoute.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";

const Router = () => {

    return (
        <div>

            {/*verify email message*/}
            <CheckVerifyEmail />

            {/*navbar*/}
            <NavbarTop />

            {/*alert for all pages-components with redux slice*/}
            <MessageAlert />

            <Container className={"py-3"}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/signIn"} element={<RegisterPage />} />
                    <Route path={"/resetPassword"} element={<ResetPasswordPage />} />
                    <Route
                        path={"/userProfile"}
                        element={
                            <AuthCheckRoute>
                                <UserProfilePage />
                            </AuthCheckRoute>
                        }
                    />
                    <Route
                        path={"/admin"}
                        element={
                            <AuthCheckRoute>
                                <AdminPage />
                            </AuthCheckRoute>
                        }
                    />
                    <Route path={"/messages"} element={<MessagesPage />} />
                    <Route path={"*"} element={<NotFoundPage />} />
                </Routes>
            </Container>
        </div>
    );
};

export default Router;
