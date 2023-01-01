import React from 'react';
import "./MessageAlert.css";
import {Alert} from "react-bootstrap";
import {useSelector} from "react-redux";

const MessageAlert = () => {

    //data from state about general alert
    const dataAlert = useSelector(state => state.messageAlert);
    console.log(dataAlert,"alert data");

    if (dataAlert['show']){
        return (
            <Alert className={"MessageAlert small"} variant={dataAlert['variant']}>
                {dataAlert['text']}
            </Alert>
        );
    }
};

export default MessageAlert;
