import {remove,ref} from 'firebase/database'
import {realtimeDB} from "../../database/firebase-connect.js";

export const handleDeleteMessage = url => {
    return remove(ref(realtimeDB,url))
}
