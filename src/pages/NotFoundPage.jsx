import React from 'react';
import {Badge} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <div className={"w-100 text-center"}>
            <h1 className={"m-0"}><Badge>404</Badge></h1>
            <p>Page not found</p>
        </div>
    );
};

export default NotFoundPage;
