import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword,setPersistence,browserLocalPersistence } from "firebase/auth";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {authDB} from "../../database/connect.js";
import {useDispatch} from "react-redux";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";

const LoginPage = () => {

    //form data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setPersistence(authDB, browserLocalPersistence)
            .then(() => {return signInWithEmailAndPassword(authDB,email,password)})
            .then(() => {navigate("/userProfile")})
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
        <div className={"LoginPage"}>
            <h3><Badge>Login</Badge></h3>

            <Form className={"w-50 p-2 border"} onSubmit={handleLogin}>
                <FormControl
                    placeholder={"Enter your email address"}
                    type={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <FormControl
                    placeholder={"Enter your password"}
                    type={"password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button size={"sm"} type={"submit"}>Login</Button>
            </Form>

            <p>Or <Link to={"/signIn"}>Sign In</Link></p>
            <p>Or <Link to={"/resetPassword"}>Reset password</Link></p>
        </div>
    );
};

export default LoginPage;
