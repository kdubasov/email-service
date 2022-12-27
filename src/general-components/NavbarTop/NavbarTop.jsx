import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import useTheme from "../../hooks/useTheme.js";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../context-providers/AuthProvider.jsx";
import "./NavbarTop.css";

const NavbarTop = () => {

    //переключатель темы
    const {type,setType} = useTheme();
    const {user} = useUserAuth();

    return (
        <Navbar bg={type} variant={type} className={"NavbarTop"}>
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>Email Service</Navbar.Brand>
                </Link>

                <Nav className="me-auto">
                    {//for auth user
                        user &&
                        <>
                            <Link to={"/userProfile"}>Account</Link>
                            <Link to={"/messages"}>Messages</Link>
                        </>
                    }
                    {//without auth
                        !user &&
                            <Link to={"/login"}>Log In</Link>
                    }

                    {/*переключатель темы*/}
                    <Form.Check
                        type="switch"
                        label="Switch theme"
                        onChange={() => setType(type === "light" ? "dark" : "light")}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
