import { createSlice } from "@reduxjs/toolkit";

const getToken = () => (typeof window !== "undefined" ? localStorage.getItem("token") : null);

const initialState = {
    user: null,
    token: getToken(),
    isAuthenticated: !!getToken(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            if (typeof window !== "undefined") {
                localStorage.setItem("token", action.payload.token);
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
            }
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
