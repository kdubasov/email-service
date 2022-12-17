import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    show:false,
    variant:"",
    text:"",
}

export const messageAlertSlice = createSlice({
    name:'messageAlert',
    initialState,
    reducers:{
        setAlert:(state,action) => {
            state.show = action.payload.show;
            state.variant = action.payload.variant;
            state.text = action.payload.text;
        },
    },
})

export const {setAlert} = messageAlertSlice.actions;
export default messageAlertSlice.reducer;