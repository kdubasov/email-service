import React from 'react';
import {useUserAuth} from "../context-providers/AuthProvider.jsx";
import MessagesReceived from "../pages-components/MessagesPage/MessagesReceived/MessagesReceived.jsx";
import MessagesSent from "../pages-components/MessagesPage/MessagesSent/MessagesSent.jsx";

const MessagesPage = () => {

    const { user } = useUserAuth();

    return (
        <div className={"MessagesPage"}>
            <h3 className={"mb-3"}>
                Messages page
            </h3>

            <MessagesReceived user={user} />
            <hr />
            <MessagesSent user={user} />
        </div>
    );
};

export default MessagesPage;
