import axios from "axios";
import { baseUrl } from "./config";
import { store } from '../store/store';

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.request.use( config => {
    const state = store.getState();
    const token = state.auth.token;

    config.headers.Authorization = `Bearer ${token}`;
    return config
})

export default axiosInstance;