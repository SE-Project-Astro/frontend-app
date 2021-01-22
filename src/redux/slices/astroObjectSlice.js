import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";


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
                state.astroObjects.push(action.payload)
            },
            prepare(tag, image, desc) {
                return {
                    payload: {tag, image, desc}
                }
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

const fetchAstroObjects = createAsyncThunk('astroObjects/fetchAstroObjects', async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        return response.data;
    }
    catch (e) {
        return e.response;
    }
})

export const { astroObjectAdded, astroObjectUpdated } = astroObjectSlice.actions;

export default astroObjectSlice.reducer;

export {fetchAstroObjects}

export const selectAllAstroObjects = state => state.astroObjects.astroObjects;

export const selectAstroObjectByID = (state, astroObjectID) => state.astroObjects.astroObjects.find(astroObject => astroObject.id === astroObjectID);