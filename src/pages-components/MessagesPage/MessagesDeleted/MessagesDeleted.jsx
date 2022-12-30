import React from 'react';
import {useGetUserChats} from "../../../pages-functions/Chats/useGetUserChats.js";
import {ListGroup} from "react-bootstrap";
import MessagesDeletedItem from "./MessagesDeletedItem.jsx";

const MessagesDeleted = ({user}) => {

    const messagesDeleted = useGetUserChats(user?.uid);

    return (
        <div className={"MessagesDeleted"}>
            <h5>Received Deleted Messages</h5>

            {
                Boolean(messagesDeleted.length) ?
                    <ListGroup>
                        {
                            messagesDeleted.map(mess => (
                                <MessagesDeletedItem key={mess.id} mess={mess} />
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

export default MessagesDeleted;
