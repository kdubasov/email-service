import React from 'react';

//css
import "./Layout.css";
import useTheme from "../../hooks/useTheme.jsx";

const Layout = ({children}) => {

    //получаем тему из хука
    const {type} = useTheme();

    return (
        <div className={`Layout ${type}`}>
            {children}
        </div>
    );
};

export default Layout;
