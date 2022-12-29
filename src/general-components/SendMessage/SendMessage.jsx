import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import "./SendMessage.css";
import {useGetUserFromEmail} from "../../pages-functions/SendMessage/useGetUserFromEmail.js";
import {useUserAuth} from "../../context-providers/AuthProvider.jsx";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";
import {handleSendMessage} from "../../pages-functions/SendMessage/handleSendMessage.js";
import {useGetChatId} from "../../pages-functions/Chats/useGetChatId.js";

const SendMessage = () => {

    const { user } = useUserAuth();
    const dispatch = useDispatch();

    //data from form
    const [formData,setFormData] = useState({
        recipient:"",
        subject:"",
        text:"",
    })

    //change form data
    const handleChange = (value,state) => {
        const copy = Object.assign({},formData);
        copy[state] = value;
        setFormData(copy);
    }

    //data about email from realtime database
    const dataRecipient = useGetUserFromEmail(formData.recipient);

    // console.log(formData);
    // console.log(dataRecipient,"dataRecipient");
    // console.log(user);

    //проверяем есть ли уже созданный чат и если да то записываем в него, если нет то в новый
    const createdChat = useGetChatId(user?.uid,dataRecipient?.uid);
    // console.log(createdChat);

    //send message
    const handleSend = (e) => {
        e.preventDefault();

        //check good email address
        if (!dataRecipient.uid || (user.email === dataRecipient.email)){
            dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:"Invalid email address",
            }));
            return false;
        }

        //дата передется в функцию для того чтобы в обеих сообщениях она была одинаковая
        const dateTime = Date.now();

        //send message function
        handleSendMessage(user,dataRecipient,formData,user.uid,dateTime,createdChat)
            .then(
                () => handleSendMessage(user,dataRecipient,formData,dataRecipient.uid,dateTime,createdChat)
                    .then(() => dispatch(setAlert({//alert show
                        show:true,
                        variant:"success",
                        text:"Message sent!",
                    }))
            ))
            .catch(err => dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:err,
            })))

        setFormData({recipient:"", subject:"", text:"",})//clear data form

        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),1000 * 10)
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
