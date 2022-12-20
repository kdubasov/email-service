import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect.js";

export const handleAddUserData = userData =>{
    const url = `/users/${userData.uid}`;

    return set(ref(realtimeDB, url),{
        email:userData.email,
        uid:userData.uid,
        displayName:userData.displayName,
    });
}
