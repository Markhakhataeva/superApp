import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


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


export const addMess = createAsyncThunk(
    "FETCH_TEXT",
    async function( text ,{rejectWithValue,dispatch}){
        try{
            const messages = {
                message_id:121,
                message:text,
                timestamp:Date.now(),
                user_id:121,
            };
            const res = await fetch("http://localhost:8080/messages", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(messages),
            });
            if (!res.ok){
                return rejectWithValue("server is not okey")
            }
            const data = await res.json()
            dispatch(addText(data));
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