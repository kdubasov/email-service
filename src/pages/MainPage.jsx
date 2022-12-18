import React from 'react';
import {Badge} from "react-bootstrap";
import SendMessage from "../general-components/SendMessage/SendMessage.jsx";
import {useUserAuth} from "../context-providers/AuthProvider.jsx";

const MainPage = () => {

    const { user } = useUserAuth();

    return (
        <div className={"MainPage"}>
            <h3><Badge>Main page</Badge></h3>

            {
                (user && user.emailVerified) &&
                <>
                    <SendMessage />
                </>
            }
        </div>
    )
};

export default MainPage;
