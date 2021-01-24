import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {setAuthToken, unSetAuthToken} from "../api/client";

const initialState = {
    accessToken: sessionStorage.getItem("token"),
    userData: JSON.parse(sessionStorage.getItem("userData")),
    isAdminLogin: false,
    isRegUserLogin: false,
    userType: sessionStorage.getItem("userType"),
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
            sessionStorage.setItem("userData", JSON.stringify(action.payload))
        },
        serUserType(state, action) {
          state.userType = action.payload
          sessionStorage.setItem("userType", action.payload)
        },
        unSetAccessToken(state, action ) {
            unSetAuthToken();
            sessionStorage.removeItem("token")
            state.userData = null
            state.accessToken = null
            state.isAdminLogin =false
            state.isRegUserLogin = false
            state.userType = ""
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
            const response = await axios.post(`http://localhost:8080/auth/login`, userAuthData);
            dispatch(authSlice.actions.setAccessToken(response.data.token));
            dispatch(authSlice.actions.setUserData(response.data.user));
            dispatch(authSlice.actions.serUserType(response.data.type))
            dispatch(authSlice.actions.setAdminLoginState());
            console.log(response.data);
            return response.data;
        }
        catch (e) {
            return e.message;
        }
    }
}


const registerThunkFunction = (email, password, firstname, lastname) => {
    const userData = {
        "UserName": email,
        "pass": password,
        "type": "regular",
        "fname": firstname,
        "lname": lastname
    }
    console.log(userData)
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`http://localhost:8080/auth/signup`, userData)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return e.message;
        }
    }
}

const passwordResetThunkFunction = (currentPassword, newPassword) => {
    const userData = {
        "currpassword": currentPassword,
        "newpassword": newPassword
    }
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`/api/changepass`, userData)
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
            const response = await axios.delete(`/api/logout`)
            dispatch(authSlice.actions.unSetAccessToken())
            console.log(response.data)
            return response.data
        }
        catch (e) {
            return e.message;
        }
    }
}

export const {setUserData, setAccessToken, setAdminLoginState, setRegUserLoginState, unSetAccessToken, serUserType} = authSlice.actions

export {loginThunkFunction,registerThunkFunction, passwordResetThunkFunction, logoutThunkFunction}

export default authSlice.reducer