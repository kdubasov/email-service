import React from 'react';
import useTheme from "../../hooks/useTheme.js";

//css
import "./Layout.css";

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
