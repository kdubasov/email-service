import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Button, Form, FormControl} from "react-bootstrap";
import {authDB} from "../../database/connect.js";
import {setUser} from "../../redux-store/slices/userSlice.js";

const LoginPage = () => {

    //form data
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(authDB,email,password)
            .then(({user}) => {
                console.log(user);
                //записваем юзера в стор
                dispatch(setUser({
                    email: user.email,
                    id:user.uid,
                    token:user["accessToken"],
                }))
                navigate("/userProfile")
            })
            .catch(console.error)
    }

    return (
        <div className={"LoginPage"}>
            <h3>LoginPage</h3>

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
        </div>
    );
};

export default LoginPage;
