import {configureStore} from "@reduxjs/toolkit";
import UsersReducer from "../redux/Users/UsersSlice"

export const store = configureStore({
    reducer: {
        users:UsersReducer,
        // messages:
    },

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch