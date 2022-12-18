import React, {useContext} from 'react';
import {ThemeContext} from "../context-providers/ThemeProvider.jsx";

const UseTheme = () => {
    //получаем тему из контекста
    return useContext(ThemeContext);
};

export default UseTheme;
