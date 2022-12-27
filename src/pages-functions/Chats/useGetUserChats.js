import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../../database/firebase-connect.js";

//for get all users chats (только полученные сообщения)
export const useGetUserChats = (userUid) =>{

    const [data,setData] = useState([]);
    const url = `/users/${userUid}/chats/`;

    useEffect(() =>{
        onValue(ref(realtimeDB,url),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                const arr = Object.values(dataInner);
                for (let elem in arr){
                    for (let elemInner in arr[elem]){
                        if (arr[elem][elemInner].sender.id !== userUid){
                            setData(old => [...old,arr[elem][elemInner]])
                        }
                    }
                }
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[userUid])

    return data
}
