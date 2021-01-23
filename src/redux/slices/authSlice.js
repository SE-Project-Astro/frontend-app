import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {setAuthToken, unSetAuthToken} from "../api/client";

const initialState = {
    accessToken: sessionStorage.getItem("token"),
    userData: null,
    isAdminLogin: false,
    isRegUserLogin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken(state, action) {
            sessionStorage.setItem("token", action.payload)
            state.accessToken = action.payload
            setAuthToken(action.payload);
        },
        setAdminLoginState(state, action) {
            if(state.accessToken) {
                state.isAdminLogin = true
            }
        },
        setRegUserLoginState(state, action) {
            if(state.accessToken) {
                state.isRegUserLogin = true
            }
        },
        setUserData(state, action) {
            state.userData = action.payload
        },
        unSetAccessToken(state, action ) {
            unSetAuthToken();
            sessionStorage.removeItem("token")
            state.isAdminLogin =false
            state.isRegUserLogin = false
        }
    }
});


const loginThunkFunction = (username, password) => {
    const userAuthData = {
        "UserName": username,
        "pass": password
    }
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`http://localhost:3000/auth/login`, userAuthData);
            dispatch(authSlice.actions.setAccessToken(response.data.token));
            dispatch(authSlice.actions.setUserData(response.data.user));
            dispatch(authSlice.actions.setAdminLoginState());
            console.log(response.data);
            return response.data;
        }
        catch (e) {
            return e.message;
        }
    }
}

const registerThunkFunction = (username, password, type) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`localhost:3000/auth/signup?username=${username}&password=${password}&type=${type}`)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return e.message;
        }
    }
}

const passwordResetThunkFunction = (username, currentPassword, newPassword) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`localhost:3000/api/changepass?username=${username}&currpassword=${currentPassword}&newpassword=${newPassword}`)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return e.message;
        }
    }
}

const logoutThunkFunction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(`localhost:3000/api/logout`)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return e.message;
        }
    }
}

export const {setUserData, setAccessToken, setAdminLoginState, setRegUserLoginState, unSetAccessToken} = authSlice.actions

export {loginThunkFunction,registerThunkFunction, passwordResetThunkFunction, logoutThunkFunction}

export default authSlice.reducer