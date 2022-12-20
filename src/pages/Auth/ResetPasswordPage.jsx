import React, {useState} from 'react';
import {Badge, Button, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import {sendPasswordResetEmail} from "firebase/auth";
import {authDB} from "../../database/firebase-connect.js";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";

const ResetPasswordPage = () => {

    const dispatch = useDispatch();

    //form value
    const [email,setEmail] = useState("");

    const handleChangePassword = () => {
        sendPasswordResetEmail(authDB, email)
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

        setEmail("")
        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),1000 * 10)
    }

    return (
        <div className={"ResetPasswordPage w-50 p-2 border"}>

            <h3><Badge>Reset password</Badge></h3>

            <FormControl
                required
                type={"email"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={"Enter your email"}
            />

            <Button onClick={handleChangePassword} size={"sm"}>Sent reset message</Button>

            <p className={"my-2"}>
                Back to
                <Link className={"mx-2"} to={"/login"}>Log In</Link>
            </p>
        </div>
    );
};

export default ResetPasswordPage;
