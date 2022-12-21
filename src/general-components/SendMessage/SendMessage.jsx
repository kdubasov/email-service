import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import "./SendMessage.css";
import {useGetUserFromEmail} from "../../pages-functions/SendMessage/useGetUserFromEmail.js";

const SendMessage = () => {

    //data from form
    const [formData,setFormData] = useState({
        recipient:"",
        subject:"",
        text:"",
    })
    console.log(formData);
    //change form data
    const handleChange = (value,state) => {
        const copy = Object.assign({},formData);
        copy[state] = value;
        setFormData(copy);
    }

    //data about email from realtime database
    const dataRecipient = useGetUserFromEmail(formData.recipient);
    console.log(dataRecipient);

    return (
        <Form className={"SendMessage"}>
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
                    dataRecipient.email &&
                    <img src={"/icons/success.svg"} alt={"user find"} />
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
