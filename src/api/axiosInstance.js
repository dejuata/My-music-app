import axios from "axios";
import { baseUrl } from "./config";
import { store } from '../store/store';

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.request.use( config => {
    const state = store.getState();
    const token = state.auth.token;
    // const expiresToken = state.auth.expires;

    config.headers.Authorization = `Bearer ${token}`;
    return config
})

axios.interceptors.response.use( (response) => {
    console.log('-> ', response)
    return response
})

export default axiosInstance;