import axios from "axios";
import { baseUrl, endpoints } from '../config';

export const getUserInfo = async (token) => {
    try {
        const res = await axios.get(`${baseUrl}/${endpoints.me}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        console.log('res', res)
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