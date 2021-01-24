import axios from "axios";

const HOST_URL = "http://localhost:8080";
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
