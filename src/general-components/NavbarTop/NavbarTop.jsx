import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import useTheme from "../../hooks/useTheme.js";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../providers/AuthProvider.jsx";

const NavbarTop = () => {

    //переключатель темы
    const {type,setType} = useTheme();
    const {user} = useUserAuth();

    return (
        <Navbar bg={type} variant={type}>
            <Container>
                <Navbar.Brand href="#home">Email Service</Navbar.Brand>
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
