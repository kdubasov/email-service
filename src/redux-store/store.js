import {configureStore} from "@reduxjs/toolkit";
import messageAlertSlice from "./slices/messageAlertSlice.js";

export const store = configureStore({
    reducer : {
        messageAlert: messageAlertSlice,
    },
})