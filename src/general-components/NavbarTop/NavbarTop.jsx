import React from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import useTheme from "../../hooks/useTheme.js";
import {Link} from "react-router-dom";

const NavbarTop = () => {

    //переключатель темы
    const {type,setType} = useTheme();

    return (
        <Navbar bg={type} variant={type}>
            <Container>
                <Navbar.Brand href="#home">Email Service</Navbar.Brand>
                <Nav className="me-auto">
                    {/*переключатель темы*/}
                    <Link to={"/login"} style={{marginRight:".8em",color:"inherit"}}>
                        Log In
                    </Link>
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
