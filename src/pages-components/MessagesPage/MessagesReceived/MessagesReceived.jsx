import React from 'react';
import {useGetUserChats} from "../../../pages-functions/Chats/useGetUserChats.js";
import {ListGroup} from "react-bootstrap";
import "./MessagesReceived.css";
import MessagesReceivedItem from "./MessagesReceivedItem.jsx";

const MessagesReceived = ({user}) => {

    const messagesReceived = useGetUserChats(user?.uid);
    // console.log(messagesReceived,"MessagesPage messagesReceived");

    return (
        <div className={"MessagesReceived"}>
            <h5>Messages Received</h5>
            {
                Boolean(messagesReceived.length) ?
                    <ListGroup>
                        {
                            messagesReceived.map(mess => (
                                <MessagesReceivedItem key={mess.id} mess={mess} />
                            ))
                        }
                    </ListGroup>:
                    <p className={"m-0 opacity-50"}>
                        Входящих сообщений нет
                    </p>
                }
        </div>
    );
};

export default MessagesReceived;
