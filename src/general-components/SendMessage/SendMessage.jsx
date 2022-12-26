import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import "./SendMessage.css";
import {useGetUserFromEmail} from "../../pages-functions/SendMessage/useGetUserFromEmail.js";
import {useUserAuth} from "../../context-providers/AuthProvider.jsx";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";

const SendMessage = () => {

    const { user } = useUserAuth();
    const dispatch = useDispatch();

    //data from form
    const [formData,setFormData] = useState({
        recipient:"",
        subject:"",
        text:"",
    })
    // console.log(formData);
    //change form data
    const handleChange = (value,state) => {
        const copy = Object.assign({},formData);
        copy[state] = value;
        setFormData(copy);
    }

    //data about email from realtime database
    const dataRecipient = useGetUserFromEmail(formData.recipient);
    // console.log(dataRecipient,"dataRecipient");

    const handleSend = (e) => {
        e.preventDefault();

        //check good email address
        if (!dataRecipient.email || (user.email === dataRecipient.email)){
            dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:"User with this email was not found!",
            }));
            return false;
        }

        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),5000)
    }

    return (
        <Form onSubmit={handleSend} className={"SendMessage"}>
            <div className={"input-container"}>
                <label className={"small"}>Message recipient</label>
                <FormControl
                    required
                    type={"email"}
                    size={"sm"}
                    value={formData.recipient}
                    onChange={e => handleChange(e.target.value,"recipient")}
                />
                {//success image when we have user with this email
                    dataRecipient.email && (user.email !== dataRecipient.email) &&
                    <img src={"/icons/success.svg"} alt={"user find"} />
                }
                {
                    user.email === dataRecipient.email &&
                    <p className={"small m-0 px-2"} style={{color:"red"}}>
                        Вы не можете отправлять сообщение самому себе.
                    </p>
                }
            </div>

            <label className={"small"}>Message subject</label>
            <FormControl
                size={"sm"}
                value={formData.subject}
                onChange={e => handleChange(e.target.value,"subject")}
            />

            <label className={"small"}>Message text</label>
            <FormControl
                required
                as={"textarea"}
                size={"sm"}
                rows={5}
                value={formData.text}
                onChange={e => handleChange(e.target.value,"text")}
            />

            <Button size={"sm"} className={"w-100 mt-2"} type={"submit"}>
                Send message
            </Button>
        </Form>
    );
};

export default SendMessage;
