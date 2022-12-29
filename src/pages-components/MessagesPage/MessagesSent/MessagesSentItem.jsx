import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";

const MessagesSentItem = ({mess}) => {

    console.log(mess);

    return (
        <ListGroupItem className={"MessagesSentItem"}>
            <p className="small m-0">
                Date:<strong>{mess.date}</strong>
            </p>
            <p className="small m-0">
                To:<strong>{mess.recipient.email}</strong>
            </p>

            <div className="message-data">
                <p className="small m-0">
                    Message subject:<strong>{mess.messageData.subject}</strong>
                </p>
                <p className="small m-0">
                    Message text:<strong>{mess.messageData.text}</strong>
                </p>
            </div>

            <Button size={"sm"} variant={"danger"}>
                Delete
            </Button>
        </ListGroupItem>
    );
};

export default MessagesSentItem;
