import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../../database/firebase-connect.js";

//for get data from realtime database
export const useGetUserFromEmail = email =>{

    const [data,setData] = useState({});

    useEffect(() =>{
        //clear state
        setData({})
        onValue(ref(realtimeDB,"/users/"),snapshot => {
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                Object.values(dataInner).map(elem => {
                    if (elem.email === email){
                        setData(elem)
                    }
                })
            }else {
                return {}
            }
        })
        // eslint-disable-next-line
    },[email])

    return data;
}
