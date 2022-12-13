import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import {Form} from "react-bootstrap";
import useTheme from "./hooks/useTheme.jsx";

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
            </Routes>
        </div>
    );
};

export default Router;
