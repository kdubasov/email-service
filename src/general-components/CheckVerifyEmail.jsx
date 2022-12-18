import React from 'react';
import {useUserAuth} from "../context-providers/AuthProvider.jsx";
import {Alert} from "react-bootstrap";

const CheckVerifyEmail = () => {
//проверяем подтвержден ли емаил юзера
    const { user } = useUserAuth();

    if (user) {
        if (user.emailVerified) {
            return (
                <Alert variant={"success"} className={"small m-0 p-2 text-center"}>
                    Your email has been successfully verified, you can send messages.
                </Alert>
            );
        }else {
            return (
                <Alert variant={"danger"} className={"small m-0 p-2 text-center"}>
                    Your email is not verified, you cannot send messages until you confirm your email.
                </Alert>
            );
        }
    }else {
        return (
            <Alert variant={"danger"} className={"small m-0 p-2 text-center"}>
                You must be logged in to send messages.
            </Alert>
        );
    }
};

export default CheckVerifyEmail;
