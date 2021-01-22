import {configureStore} from "@reduxjs/toolkit";

import astroObjectReducer from 'redux/slices/astroObjectSlice'

export default configureStore({
    reducer: {
        astroObjects: astroObjectReducer
    }
});