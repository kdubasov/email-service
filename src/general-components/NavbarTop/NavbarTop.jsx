import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import useTheme from "../../hooks/useTheme.js";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../context-providers/AuthProvider.jsx";

const NavbarTop = () => {

    //переключатель темы
    const {type,setType} = useTheme();
    const {user} = useUserAuth();

    return (
        <Navbar bg={type} variant={type}>
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>Email Service</Navbar.Brand>
                </Link>

                <Nav className="me-auto">
                    {/*переключатель темы*/}
                    {
                        user ?
                            <Link to={"/userProfile"} style={{marginRight:".8em",color:"inherit"}}>
                                User profile
                            </Link>:
                            <Link to={"/login"} style={{marginRight:".8em",color:"inherit"}}>
                                Log In
                            </Link>
                    }
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
