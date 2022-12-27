import React from 'react';
import {Badge} from "react-bootstrap";
import {useUserAuth} from "../context-providers/AuthProvider.jsx";
import MessagesReceived from "../pages-components/MessagesPage/MessagesReceived/MessagesReceived.jsx";

const MessagesPage = () => {

    const { user } = useUserAuth();

    return (
        <div className={"MessagesPage"}>
            <h3><Badge>Messages page</Badge></h3>

            <MessagesReceived user={user} />
        </div>
    );
};

export default MessagesPage;
