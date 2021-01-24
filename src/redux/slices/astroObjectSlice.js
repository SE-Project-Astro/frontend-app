import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import axios from "axios";
import {useSelector} from "react-redux";

const initialState = {
    astroObjects: [],
    status: "idle",
};

const astroObjectSlice = createSlice({
    name: 'astroObjects',
    initialState,
    reducers: {
        astroObjectAdded: {
            reducer(state, action) {
                state.astroObjects.push(...action.payload)
            }
        },
        setNull(state, action) {
          state.astroObjects = []
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
            if (action.payload) {
                state.status = "success"
            } else {
                state.status = "error"
            }
        }

    }
});
const fetchAstroObjects = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(astroObjectSlice.actions.setLoadingStatus())
            const response = await axios.get('/api/getAstrList?count=100&tbName=astronomical_object')
            dispatch(astroObjectAdded(response.data))
            dispatch(astroObjectSlice.actions.setResultStatus(true))
        } catch (e) {
            dispatch(astroObjectSlice.actions.setResultStatus(false))
        }


    }
};

const fetchAstroObjectById = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(astroObjectSlice.actions.setLoadingStatus())
            const response = await axios.get(`/api/getAstrObj?id=${id}`)
            dispatch(astroObjectAdded(response.data))
            dispatch(astroObjectSlice.actions.setResultStatus(true))
        } catch (e) {
            dispatch(astroObjectSlice.actions.setResultStatus(false))
        }


    }
}

const addNewAstroObject = (name, image, cardText, content) => {
    const astroObjectData = {
        "Tag": name,
        "Image": image,
        "CardText": cardText,
        "Desc": content
    }
    return async (dispatch, getState) => {
        try {
            dispatch(astroObjectSlice.actions.setLoadingStatus());
            dispatch(astroObjectSlice.actions.setNull())
            const response = await axios.post(`/api/AddAstrObj`, astroObjectData)
            dispatch(astroObjectSlice.actions.setResultStatus(true))
            dispatch(fetchAstroObjects())
            return response.data;
        } catch (e) {
            dispatch(astroObjectSlice.actions.setResultStatus(false))
            return e.message;
        }
    }
}

const updateAstroObject = (id, cardText, image, content) => {
    const astroObjectData = {
        "ID" : id,
        "Image" : image,
        "CardText": cardText,
        "Desc" : content,
        "tStamp": ""
    }
    return async (dispatch, getState) => {
        try {
            dispatch(astroObjectSlice.actions.setLoadingStatus());
            dispatch(astroObjectSlice.actions.setNull())
            const response = await axios.put(`/api/EditAstrObj`, astroObjectData)
            dispatch(astroObjectSlice.actions.setResultStatus(true))
            dispatch(fetchAstroObjects())
            return response.data;
        } catch (e) {
            dispatch(astroObjectSlice.actions.setResultStatus(false))
            return e.message;
        }
    }
}

export const {astroObjectAdded, astroObjectUpdated} = astroObjectSlice.actions;

export default astroObjectSlice.reducer;

export {fetchAstroObjects, addNewAstroObject, updateAstroObject, fetchAstroObjectById}


export const selectAllAstroObjects = (state) => state.astroObjects.astroObjects;

export const selectAstroObjectByID = (state, astroObjectID) =>
    state.astroObjects.astroObjects.find(
        (astroObject) => astroObject.id === astroObjectID
    );
