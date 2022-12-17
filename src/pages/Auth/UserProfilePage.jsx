import React from 'react';
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeUser} from "../../redux-store/slices/userSlice.js";
import {useAuth} from "../../hooks/useAuth.js";

const UserProfilePage = () => {

    const dispatch = useDispatch();
    const dataUser = useAuth();
    console.log(dataUser)

    return (
        <div className={"UserProfilePage"}>

            <h2>User profile</h2>

            <ListGroup>
                <ListGroupItem>
                    {dataUser.email}
                </ListGroupItem>
            </ListGroup>

            <Button
                size={"sm"}
                variant={"danger"}
                onClick={() => dispatch(removeUser())}
            >
                Log out
            </Button>

        </div>
    );
};

export default UserProfilePage;
