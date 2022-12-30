import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import {handleDeleteMessage} from "../../../pages-functions/Chats/handleDeleteMessage.js";
import {setAlert} from "../../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";

const MessagesSentItem = ({mess}) => {
    // console.log(mess,"MessagesSentItem");

    const dispatch = useDispatch();

    //delete message (all users)
    const handleDelete = () => {
        const urlSender = `/users/${mess.sender.id}/chats/${mess.chatId}/${mess.id}`;
        const urlRecipient = `/users/${mess.recipient.id}/chats/${mess.chatId}/${mess.id}`;

        handleDeleteMessage(urlSender)
            .then(() => handleDeleteMessage(urlRecipient))
            .then(() => dispatch(setAlert({//alert show success
                show:true,
                variant:"success",
                text:"Message deleted!",
            })))
            .catch(err => dispatch(setAlert({//alert show danger
                show:true,
                variant:"danger",
                text:err,
            })))

        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),1000 * 10)
    }

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

            <Button onClick={() => handleDelete()} size={"sm"} variant={"danger"}>
                Delete
            </Button>
        </ListGroupItem>
    );
};

export default MessagesSentItem;
