import React from 'react';
import "./MessagesSent.css";
import {useGetUserSentMess} from "../../../pages-functions/Chats/useGetUserSentMess.js";
import MessagesSentItem from "./MessagesSentItem.jsx";
import {ListGroup} from "react-bootstrap";

const MessagesSent = ({user}) => {

    const messagesSent = useGetUserSentMess(user?.uid);
    // console.log(messagesSent,"MessagesPage messagesSent");

    return (
        <div className={"MessagesSent"}>
            <h5>Sent message</h5>
            {
                Boolean(messagesSent.length) ?
                    <ListGroup>
                        {
                            messagesSent.map(mess => (
                                <MessagesSentItem key={mess.id} mess={mess} />
                            ))
                        }
                    </ListGroup>:
                    <p className={"m-0 opacity-50"}>
                        Отправленных сообщений нет
                    </p>
            }
        </div>
    );
};

export default MessagesSent;
