import axiosInstance from "../axiosInstance";
import { endpoints } from '../config';

export const getUserInfo = async () => {
    try {
        const res = await axiosInstance.get(`/${endpoints.me}`)
        const { data, status } = res;

        if (status === 200) {
            return {
                id: data.id,
                displayName: data.display_name
            }
        }
    }
    catch {
        console.log('[Error] getUserInfo')
    }
}