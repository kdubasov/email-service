import React, {useContext} from 'react';
import {ThemeContext} from "../providers/ThemeProvider.jsx";

const UseTheme = () => {
    //получаем тему из контекста
    const value = useContext(ThemeContext);

    return value;
};

export default UseTheme;
