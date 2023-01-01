import {configureStore} from "@reduxjs/toolkit";
import messageAlertSlice from "./slices/messageAlertSlice.js";
import sendMessageSlice from "./slices/sendMessageSlice.js";

export const store = configureStore({
    reducer : {
        messageAlert: messageAlertSlice,
        sendMessage:sendMessageSlice,
    },
})