import {ref, update} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect.js";

export const handleHideMessage = (url,oldData) =>{
    return update(ref(realtimeDB, `${url}`),{
        ...oldData,
        hide:true,
    })
}
