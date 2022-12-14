import React from 'react';
import {Badge, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../context-providers/AuthProvider.jsx";
import {authDB} from "../../database/firebase-connect.js";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";
import {handleAddUserData} from "../../pages-functions/Auth/addUserData.js";
import RedactUserData from "./RedactUserData.jsx";
const UserProfilePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,logOut} = useUserAuth();
    // console.log(user,"USER");

    //logout function with redirect
    const handleLogout = () => {
        logOut()
        navigate("/login")
    }

    //подтвержаем емаил через почту
    const handleVerifyEmail = () => {
        sendEmailVerification(authDB.currentUser)
            .then(() => dispatch(setAlert({//alert show
                show:true,
                variant:"success",
                text:"Email verification sent! Check your email and" +
                     "after confirmation you need reload this page!",
            })))
            .then(() => handleAddUserData(user))
            .catch(error => dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:error.message,
            })))

        // handleAddUserData(e,user).then(console.log)
        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),5000)
    }

    //поменять пароль
    const handleChangePassword = () => {
        sendPasswordResetEmail(authDB, user.email)
            .then(() => dispatch(setAlert({//alert show
                show:true,
                variant:"success",
                text:"Password reset email sent!",
            })))
            .catch(error => dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:error.message,
            })))

        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),5000)
    }

    return (
        <div className={"UserProfilePage"}>

            <h3><Badge>User profile</Badge></h3>

            <ListGroup>
                <ListGroupItem className={"d-flex justify-content-between align-items-center"}>
                    <img width={150} src={user.photoURL} alt={user.displayName}/>

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

            {
                Boolean(Object.values(user).length) &&
                <RedactUserData user={user} />
            }

        </div>
    );
};

export default UserProfilePage;
