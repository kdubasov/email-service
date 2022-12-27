import React from 'react';
import {useGetUserChats} from "../../../pages-functions/Chats/useGetUserChats.js";
import {Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import "./MessagesReceived.css";

const MessagesReceived = ({user}) => {

    const messagesReceived = useGetUserChats(user?.uid);
    console.log(messagesReceived,"MessagesPage messagesReceived");

    if (Object.values(messagesReceived).length)
    return (
        <div className={"MessagesReceived"}>
            <h5><Badge>Messages Received</Badge></h5>
            <ListGroup>
                {
                    messagesReceived.map(mess => (
                        <ListGroupItem key={mess.id}>
                            <header>
                                <img
                                    src={mess.sender.photoURL}
                                    alt={mess.sender.displayName}
                                />
                                <div>
                                    <p className="small m-0">
                                        From:
                                        <strong className={"mx-1"}>
                                            {mess.sender.displayName}
                                        </strong>
                                    </p>
                                    <p className="small m-0">
                                        Sender email:
                                        <strong className={"mx-1"}>
                                            {mess.sender.email}
                                        </strong>
                                    </p>
                                    <p className="small m-0">
                                        Departure date:
                                        <strong className={"mx-1"}>
                                            {mess.date}
                                        </strong>
                                    </p>
                                </div>
                            </header>

                            <div className="message-data">
                                <p className="small m-0">
                                    Message subject:
                                    <strong className={"mx-1"}>
                                        {mess.messageData.subject}
                                    </strong>
                                </p>
                                <p className="small m-0">
                                    Message text:
                                    <strong className={"mx-1"}>
                                        {mess.messageData.text}
                                    </strong>
                                </p>
                            </div>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default MessagesReceived;
