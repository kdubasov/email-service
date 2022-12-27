import {set,ref} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect.js";
import {getDate} from "../../functions/getDate.js";

export const handleSendMessage = (sender, recipient, messageData, dbUserUid, findChatId = false) =>{

    const chatId = `${sender.uid}-${recipient.uid}`;
    const messageId = `${sender.uid}-${Date.now()}`;
    const url = `/users/${dbUserUid}/chats/${findChatId ? findChatId : chatId}/${messageId}`;

    const messageObject = {
        id:messageId,
        date:getDate(Date.now()),
        dateNoRedact: Date.now(),
        sender:{
            id:sender.uid,
            displayName:sender.displayName,
            photoURL:sender.photoURL,
            email:sender.email,
        },
        recipient:{
            id:recipient.uid,
            email:recipient.email,
        },
        messageData:{
            ...messageData,
        }
    };

    return set(ref(realtimeDB, url),messageObject)
};
