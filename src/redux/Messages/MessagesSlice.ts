import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultMethod } from 'react-router-dom/dist/dom'


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

export const meesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addText:(state,action)=>{
            state.messages = [
                {
                    message:action.payload.text,
                    user_id:action.payload.id,
                    timestamp:action.payload.timestamp,
                    message_id:action.payload.id,

                }
            ]
            action.payload.setText("")
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
export const { addText } = meesSlice.actions
export default meesSlice.reducer