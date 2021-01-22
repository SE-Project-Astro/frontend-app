import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userData: null,
    isAdminLogin: false,
    isRegUserLogin: false,
    adminAccessToken: "",
    regUserAccessToken: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAdminAccessToken(state, action) {
            state.adminAccessToken = action.payload
        },
        setAdminLoginState(state, action) {
            if(state.adminAccessToken) {
                state.isAdminLogin = true
            }
        },
        setRegUserAccessToken(state, action) {
            state.regUserAccessToken = action.payload
        },
        setRegUserLoginState(state, action) {
            if(state.regUserAccessToken) {
                state.isRegUserLogin = true
            }
        },
        setUserData(state, action) {
            state.userData = action.payload
        },
    }
});


const loginThunkFunction = (username, password) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(`http://localhost:3000/auth/login?username=${username}&password=${password}`);
            dispatch(authSlice.actions.setAdminAccessToken("token"))
            dispatch(authSlice.actions.setAdminLoginState())
            console.log(response.data)
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

export const {setUserType, setAccessToken, setUserData} = authSlice.actions

export {loginThunkFunction,registerThunkFunction, passwordResetThunkFunction, logoutThunkFunction}

export default authSlice.reducer