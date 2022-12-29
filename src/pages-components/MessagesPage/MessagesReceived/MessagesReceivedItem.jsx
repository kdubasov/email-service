import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";

const MessagesReceivedItem = ({mess}) => {
    return (
        <ListGroupItem key={mess.id}>
            <div className={"left"}>
                <header>
                    <img
                        src={mess.sender.photoURL}
                        alt={mess.sender.displayName}
                    />
                    <div>
                        <p className="small m-0">
                            From:<strong>{mess.sender.displayName}</strong>
                        </p>
                        <p className="small m-0">
                            Sender email:<strong>{mess.sender.email}</strong>
                        </p>
                        <p className="small m-0">
                            Date:<strong>{mess.date}</strong>
                        </p>
                    </div>
                </header>

                <div className="message-data">
                    <p className="small m-0">
                        Message subject:<strong>{mess.messageData.subject}</strong>
                    </p>
                    <p className="small m-0">
                        Message text:<strong>{mess.messageData.text}</strong>
                    </p>
                </div>
            </div>

            <div className={"mx-2"}>
                <Button
                    variant={"danger"}
                    size={"sm"}
                    className={"mb-1"}
                >
                    Delete
                </Button>
                <br/>

                <Button
                    variant={"success"}
                    size={"sm"}
                >
                    Reply
                </Button>
            </div>
        </ListGroupItem>
    );
};

export default MessagesReceivedItem;
