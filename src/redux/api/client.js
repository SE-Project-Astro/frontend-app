import axios from "axios";

const HOST_URL = "https://morning-beach-31264.herokuapp.com";
axios.defaults.baseURL = HOST_URL;

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization']
    }

}

export const unSetAuthToken = () => {
    delete axios.defaults.headers.common['Authorization']
}
