import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";
import {useSelector} from "react-redux";


const initialState = {
    astroObjects: [],
    status: 'idle',
    error: null
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
            const {tag, image, desc} = action.payload;
            const existingObject = state.astroObjects.find(astroObject => astroObject.tag === tag);
            if (existingObject) {
                existingObject.desc = desc;
            }
        }
    }
});

// const fetchAstroObjects = createAsyncThunk('astroObjects/fetchAstroObjects', async () => {
//     const accessToken = useSelector(state => state.users.accessToken)
//
//         const response = await axios.get('https://reqres.in/api/users?page=2')
//         console.log(response);
// })
const fetchAstroObjects =  () => {
    return async (dispatch, getState) =>
    {
        const response = await axios.get('/api/getAstrList?count=5&tbName=astronomical_object')
        dispatch(astroObjectAdded(response.data))
    }
}

export const { astroObjectAdded, astroObjectUpdated } = astroObjectSlice.actions;

export default astroObjectSlice.reducer;

export {fetchAstroObjects}

export const selectAllAstroObjects = state => state.astroObjects.astroObjects;

export const selectAstroObjectByID = (state, astroObjectID) => state.astroObjects.astroObjects.find(astroObject => astroObject.id === astroObjectID);