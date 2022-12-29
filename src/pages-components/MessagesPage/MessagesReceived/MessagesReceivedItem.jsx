import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setAlert} from "../../../redux-store/slices/messageAlertSlice.js";
import {handleHideMessage} from "../../../pages-functions/Chats/handleHideMessage.js";

const MessagesReceivedItem = ({mess}) => {

    const dispatch = useDispatch();

    //delete message (all users)
    const handleDelete = () => {
        const url = `/users/${mess.recipient.id}/chats/${mess.chatId}/${mess.id}`;

        handleHideMessage(url,mess)
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

    //если сообщение было удалено то не показываем его
    if (mess.hide){
        return false;
    }

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
                    onClick={handleDelete}
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
