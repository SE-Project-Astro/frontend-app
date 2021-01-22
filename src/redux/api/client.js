import axios from "axios";

const HOST_URL = "http://localhost:3000";
axios.defaults.baseURL = HOST_URL;

export const setAuthToken = token => {
    axios.defaults.headers = {
        authorization: `Bearer ${token}`
    }
}
