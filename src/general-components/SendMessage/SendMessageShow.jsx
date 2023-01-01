import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "../../redux-store/slices/sendMessageSlice.js";
import {Button} from "react-bootstrap";
import SendMessage from "./SendMessage.jsx";

const SendMessageShow = () => {

    const dispatch = useDispatch();
    //data from state about general alert
    const dataFormSend = useSelector(state => state.sendMessage);
    console.log(dataFormSend,"dataFormSend");

    //for show/hide message send block
    const handleShowMessage = () => {
        dispatch(setMessage({//alert show
            show: !dataFormSend.show,
            recipient: "",
        }));
    }

    return (
        <div className={"SendMessageShow"}>

            {/*set show hide button*/}
            <Button
                size={"sm"}
                className={"showHideBut"}
                onClick={handleShowMessage}
            >
                {
                    dataFormSend.show ?
                        "Close form window":
                        "Send message"
                }
            </Button>

            {//show/hide form with message data
                dataFormSend.show &&
                <SendMessage dataFormSend={dataFormSend} />
            }
        </div>
    );
};

export default SendMessageShow;
