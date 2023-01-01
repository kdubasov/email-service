import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    show:false,
    recipient:"",
}

export const sendMessageSlice = createSlice({
    name:'sendMessage',
    initialState,
    reducers:{
        setMessage:(state,action) => {
            state.show = action.payload.show;
            state.recipient = action.payload.recipient;
        },
    },
})

export const {setMessage} = sendMessageSlice.actions;
export default sendMessageSlice.reducer;