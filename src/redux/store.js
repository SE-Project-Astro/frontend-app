import {configureStore} from "@reduxjs/toolkit";

import astroObjectReducer from 'redux/slices/astroObjectSlice'
import authReducer from 'redux/slices/authSlice'

export default configureStore({
    reducer: {
        astroObjects: astroObjectReducer,
        users: authReducer
    }
});