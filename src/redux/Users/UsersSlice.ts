import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersProps} from "../../types/types";

const initialState:UsersProps = {
    users:[],
    loadingUsers:false,
}

export const getUsers = createAsyncThunk(
    "FETCH_USERS",
    async () => {
        const res = await fetch("http://localhost:8080/users")
        return res.json()
    }
)


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loadingUsers = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loadingUsers = false
                state.users = action.payload
            })
    }
})


export default userSlice.reducer