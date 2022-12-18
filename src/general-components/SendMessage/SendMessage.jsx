import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import "./SendMessage.css";

const SendMessage = () => {

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

    console.log(formData)

    return (
        <Form className={"SendMessage"}>
            <label className={"small"}>Message recipient</label>
            <FormControl
                type={"email"}
                size={"sm"}
                value={formData.recipient}
                onChange={e => handleChange(e.target.value,"recipient")}
            />

            <label className={"small"}>Message subject</label>
            <FormControl
                size={"sm"}
                value={formData.subject}
                onChange={e => handleChange(e.target.value,"subject")}
            />

            <label className={"small"}>Message text</label>
            <FormControl
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
