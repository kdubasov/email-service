import React from 'react';
import {ListGroupItem} from "react-bootstrap";

const MessagesDeletedItem = ({mess}) => {

    // console.log(mess,"MessagesDeletedItem");

    if (mess.hide){
        return (
            <ListGroupItem className={"MessagesDeletedItem"}>
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
            </ListGroupItem>
        );
    }
};

export default MessagesDeletedItem;
