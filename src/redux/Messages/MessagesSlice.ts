import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


interface MessagesProps {
    messages:Array<{
        message_id: number;
        user_id:number,
        timestamp:string,
        message:string,
    }>,
    loadingMessages:boolean
}

type MessagesACtion = {
    message_id: number;
    user_id:number,
    timestamp:string,
    message:string,

}

type AddMessageType = {
    text:string,
    id:number,
    user_id:number,
    timestamp:string
}

const initialState:MessagesProps = {
    messages:[],
    loadingMessages:false,

}



export const getMessages = createAsyncThunk(
    "FETCH_MESSAGES",
    async (_,{rejectWithValue}) => {
        try{
            const res = await fetch("http://localhost:8080/messages")
            if (!res.ok){
                return rejectWithValue("server is not okey")
            }
            return res.json()
        }catch(error){
            return rejectWithValue(error)
        }
    }
)


export const addMess = createAsyncThunk(
    "FETCH_TEXT",
    async function(messageData:AddMessageType,{rejectWithValue}){
        try{
            const res = await axios.post("http://localhost:8080/messages", {
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    message_id:messageData.id + 1,
                    user_id:messageData.id + 1,
                    timestamp:messageData.timestamp,
                    message:messageData.text
                }),
            });
            if (res.status === 404 || res.status === 500){
                return rejectWithValue("server is not okey")
            }
            return await res.data
        }catch (e){
            return rejectWithValue("server is not okey")
        }
    }
)


export const meesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addText:(state,action)=>{
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMessages.pending, (state) => {
                state.loadingMessages = true
            })
            .addCase(getMessages.fulfilled, (state, action:PayloadAction<MessagesACtion[]>) => {
                state.loadingMessages = false
                state.messages = action.payload
            })
    }
})
 const {addText} = meesSlice.actions
export default meesSlice.reducer
