import {set,ref} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect.js";
import {getDate} from "../../functions/getDate.js";


//отправка сообщения
export const handleSendMessage = (sender,recipient,messageData,dbUserUid,dateTime,findChatId) =>{
    //дата передется в функцию для того чтобы в обеих сообщениях она была одинаковая

    const chatId = findChatId || `${sender.uid}-${recipient.uid}`;
    const messageId = `${sender.uid}-${dateTime}`;
    const url = `/users/${dbUserUid}/chats/${chatId}/${messageId}`;

    const messageObject = {
        id:messageId,
        chatId:chatId,
        date:getDate(dateTime),
        dateNoRedact: dateTime,
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
