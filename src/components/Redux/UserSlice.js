import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userId: localStorage.getItem('userId') || null,
    token: localStorage.getItem('token') || null,
};

const userSlice = createSlice({
    name: "user;",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        },
        
        logout: (state) => {
            state.userId = null;
            state.token = null;
        },
    }
});

export const {setUser, login, logout} = userSlice.actions;
export default userSlice.reducer;
