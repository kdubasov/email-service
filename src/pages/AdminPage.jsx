import React from 'react';
import {useUserAuth} from "../context-providers/AuthProvider.jsx";
import {Alert, Badge, Spinner} from "react-bootstrap";
import NotFoundPage from "./NotFoundPage.jsx";

const AdminPage = () => {

    const {user} = useUserAuth();

    if (!user){
        return (
            <Alert className={"p-2 text-center"}>
                <Spinner size={"sm"} animation={"border"} />
            </Alert>
        );
    }else {
        if (user.email === "cergocergo41@gmail.com") {
            //ADMIN PAGE
            return (
                <div className={"AdminPage"}>
                    <h3><Badge>Admin page</Badge></h3>

                </div>
            );
        }return <NotFoundPage />
    }
};

export default AdminPage;
