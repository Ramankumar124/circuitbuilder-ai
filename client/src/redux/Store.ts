import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";
import { flowSlice } from "./features/flowRefSlice"
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        flow: flowSlice.reducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
