import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialState{
    fullName: string,
    email: string,
    submittedName: string,
    submittedEmail: string
}
const initialState: InitialState= {
    fullName: "",
    email: "",
    submittedName: "",
    submittedEmail: "" 
}

// Handles everything to do with cardSubmit
const submitSlice = createSlice({
    name: "submit",
    initialState,
    reducers: {
        updateName: (state : any, action: PayloadAction<string>)=>{
            state.fullName = action.payload
        },
        updateEmail: (state : any, action: PayloadAction<string>)=>{
            state.email = action.payload
        },
        submitForm: (state : any)=>{
            state.submittedName = state.fullName
            state.submittedEmail = state.email
        },

    }
});

export const {updateName, updateEmail, submitForm} = submitSlice.actions

export default submitSlice.reducer
