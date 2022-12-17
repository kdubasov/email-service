import React from 'react';
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../providers/AuthProvider.jsx";
import {authDB} from "../../database/connect.js";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
const UserProfilePage = () => {

    const navigate = useNavigate();
    const {user,logOut} = useUserAuth();
    // console.log(user,"USER");

    const handleLogout = () => {
        logOut()
        navigate("/login")
    }

    //подтвержаем емаил через почту
    const handleVerifyEmail = () => {
        sendEmailVerification(authDB.currentUser)
            .then(() => {
                console.log("Email verification sent!")
            });
    }

    //поменять пароль
    const handleChangePassword = () => {
        sendPasswordResetEmail(authDB, user.email)
            .then(() => {console.log("Password reset email sent!")})
            .catch(() => {console.log("Password reset email sent ERROR!")})
    }

    return (
        <div className={"UserProfilePage"}>

            <h2>User profile</h2>

            <ListGroup>
                <ListGroupItem className={"d-flex justify-content-between align-items-center"}>
                    <img src={user.photoURL} alt={user.displayName}/>

                    <Button
                        size={"sm"}
                        variant={"danger"}
                        onClick={handleLogout}
                    >
                        Log out
                    </Button>
                </ListGroupItem>
                <ListGroupItem className={"d-flex justify-content-between align-items-center"}>
                    {user.displayName}
                    <Button size={"sm"} onClick={handleChangePassword}>Change password</Button>
                </ListGroupItem>
                <ListGroupItem>
                    {user.email}
                </ListGroupItem>
                <ListGroupItem className={"d-flex align-items-center justify-content-between"}>
                    {user.emailVerified ? "Email verified" : "Email not verified"}
                    {
                        !user.emailVerified &&
                        <Button size={"sm"} onClick={handleVerifyEmail}>Verify email</Button>
                    }
                </ListGroupItem>
            </ListGroup>

        </div>
    );
};

export default UserProfilePage;
