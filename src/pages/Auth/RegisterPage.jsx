import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {authDB} from "../../database/firebase-connect.js";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";


const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        displayName:"",
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
            handleSetFormData("","password");
            handleSetFormData("","passwordAgain");
            dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:"Invalid passwords! Enter it again!"
            }))
            setTimeout(() => dispatch(setAlert({//alert hide
                show:false,
                variant:"",
                text:"",
            })),5000)
            return;
        }

        createUserWithEmailAndPassword(authDB,formData.email,formData.password)
            .then(({user}) => {
                //записываем имя и фамилию и фотку пользователя
                updateProfile(authDB.currentUser, {
                    displayName: formData.displayName,
                    photoURL: "/devs/user-circle.svg",
                }).then(() => {console.log("User data added!")})
                console.log(user);
                navigate("/userProfile")
            })
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
        <div className={"RegisterPage"}>
            <h3><Badge>Sign In</Badge></h3>

            <Form className={"w-50 p-2 border"} onSubmit={handleRegister}>
                <FormControl
                    type={"email"}
                    placeholder={"Email"}
                    value={formData.email}
                    onChange={e => handleSetFormData(e.target.value,"email")}
                />
                <FormControl
                    required
                    type={"text"}
                    placeholder={"Name and Surname"}
                    value={formData.displayName}
                    onChange={e => handleSetFormData(e.target.value,"displayName")}
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
            <p>Or <Link to={"/resetPassword"}>Reset password</Link></p>
        </div>
    );
};

export default RegisterPage;
