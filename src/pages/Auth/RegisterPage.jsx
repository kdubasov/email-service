import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Button, Form, FormControl} from "react-bootstrap";
import {authDB} from "../../database/connect.js";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux-store/slices/userSlice.js";


const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:"",
        passwordAgain:"",
    })
    //для изменение стейта с информаией из формы
    const handleSetFormData = (value,state) => {
        const copy = Object.assign({},formData);
        copy[state] = value;
        setFormData(copy);
    }

    //send form
    const handleRegister = (e) => {
        e.preventDefault();

        //проверяем совпадение паролей
        if (formData.password !== formData.passwordAgain){
            console.log("Пароли не совпадают");
            return;
        }

        createUserWithEmailAndPassword(authDB,formData.email,formData.password)
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
        <div className={"RegisterPage"}>
            <h3>Sign In</h3>

            <Form onSubmit={handleRegister}>
                <FormControl
                    type={"email"}
                    placeholder={"Email"}
                    value={formData.email}
                    onChange={e => handleSetFormData(e.target.value,"email")}
                />

                <FormControl
                    type={"password"}
                    placeholder={"Password"}
                    value={formData.password}
                    onChange={e => handleSetFormData(e.target.value,"password")}
                />

                <FormControl
                    type={"password"}
                    placeholder={"Password again"}
                    value={formData.passwordAgain}
                    onChange={e => handleSetFormData(e.target.value,"passwordAgain")}
                />
                <Button size={"sm"} type={"submit"}>Sign In</Button>
            </Form>

            <p>Or <Link to={"/login"}>Log In</Link></p>
        </div>
    );
};

export default RegisterPage;
