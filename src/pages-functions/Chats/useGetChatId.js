import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../../database/firebase-connect.js";

//for get data from realtime database
export const useGetChatId = (senderUid,recipientUid) =>{

    const [data,setData] = useState("");
    const url = `/users/${senderUid}/chats/`;

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData("")
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                const arrIds = Object.keys(dataInner);
                for (let elem in arrIds){
                    if (arrIds[elem].includes(recipientUid)){
                        setData(arrIds[elem])
                    }
                }
            }else {
                return ""
            }
        })
        // eslint-disable-next-line
    },[senderUid,recipientUid])

    return data
}
