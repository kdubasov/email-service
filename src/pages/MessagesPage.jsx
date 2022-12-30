import React from 'react';
import {useUserAuth} from "../context-providers/AuthProvider.jsx";
import MessagesReceived from "../pages-components/MessagesPage/MessagesReceived/MessagesReceived.jsx";
import MessagesSent from "../pages-components/MessagesPage/MessagesSent/MessagesSent.jsx";
import MessagesDeleted from "../pages-components/MessagesPage/MessagesDeleted/MessagesDeleted.jsx";

const MessagesPage = () => {

    const { user } = useUserAuth();

    return (
        <div className={"MessagesPage"}>
            <h3 className={"mb-3"}>Messages page</h3>

            <MessagesReceived user={user} />
            <hr />
            <MessagesSent user={user} />
            <hr />
            <MessagesDeleted user={user} />
        </div>
    );
};

export default MessagesPage;
