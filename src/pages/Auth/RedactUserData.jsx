import React, {useState} from 'react';
import {updateProfile} from "firebase/auth";
import {authDB} from "../../database/firebase-connect.js";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {setAlert} from "../../redux-store/slices/messageAlertSlice.js";
import {useDispatch} from "react-redux";

const RedactUserData = ({user}) => {

    //user data
    const [userState,setUserState] = useState({...user});
    const [newImage,setNewImage] = useState("");

    const dispatch = useDispatch();

    //send form
    const handleSend = (e) => {
        e.preventDefault();
        updateProfile(authDB.currentUser, {
            displayName: userState.displayName,
            photoURL: newImage ? newImage : userState.photoURL,
        })
            .then(() => dispatch(setAlert({//alert show
                show:true,
                variant:"success",
                text:"Profile update success!",
            })))
            .catch(() => dispatch(setAlert({//alert show
                show:true,
                variant:"danger",
                text:"Profile update error!",
            })))

        setNewImage("")

        setTimeout(() => dispatch(setAlert({//alert hide
            show:false,
            variant:"",
            text:"",
        })),5000)
    }

    //change input
    const handleChange = (value,input) => {
        const copy = Object.assign({}, userState);
        copy[input] = value;
        setUserState(copy);
    }


    return (
        <div className={"RedactUserData w-50 p-3 border my-2"}>
            <h3><Badge>Redact user data</Badge></h3>
            <Form onSubmit={handleSend}>
                <FormControl
                    placeholder={"Enter new photo link"}
                    size={"sm"}
                    className={"mb-2"}
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                />
                <FormControl
                    required
                    size={"sm"}
                    className={"mb-2"}
                    value={userState.displayName}
                    onChange={e => handleChange(e.target.value,"displayName")}
                />

                <Button size={"sm"} type={"submit"}>
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default RedactUserData;
