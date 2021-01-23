import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";
import {useSelector} from "react-redux";


const initialState = {
    astroObjects: [],
    status: 'idle',
}


const astroObjectSlice = createSlice({
    name: 'astroObjects',
    initialState,
    reducers: {
        astroObjectAdded: {
            reducer(state, action) {
                state.astroObjects.push(...action.payload)
            }
        },
        astroObjectUpdated(state, action) {
            const {id, image, desc} = action.payload;
            const existingObject = state.astroObjects.find(astroObject => astroObject.id === id);
            if (existingObject) {
                existingObject.desc = desc;
            }
        },
        setLoadingStatus(state, action) {
            state.status = 'loading'
        },
        setResultStatus(state, action) {
            if(action.payload) {
                state.status = "success"
            }
            else {
                state.status = "error"
            }
        }

    }
});
const fetchAstroObjects =  () => {
    return async (dispatch, getState) =>
    {
        try {
            dispatch(astroObjectSlice.actions.setLoadingStatus())
            const response = await axios.get('/api/getAstrList?count=5&tbName=astronomical_object')
            dispatch(astroObjectAdded(response.data))
            dispatch(astroObjectSlice.actions.setResultStatus(true))
        }
        catch (e) {
            dispatch(astroObjectSlice.actions.setResultStatus(false))
        }
    }
}

const addNewAstroObject = () => {
    return async (dispatch, getState) => {
        try {
            
        }
        catch (e) {
            
        }
    }
}

export const { astroObjectAdded, astroObjectUpdated } = astroObjectSlice.actions;

export default astroObjectSlice.reducer;

export {fetchAstroObjects}

export const selectAllAstroObjects = state => state.astroObjects.astroObjects;

export const selectAstroObjectByID = (state, astroObjectID) => state.astroObjects.astroObjects.find(astroObject => astroObject.id === astroObjectID);