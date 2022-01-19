import axios from 'axios';
import { baseUrl, endpoints } from '../config';


export const checkFavoritesTracks =  async (token, tracks) => {

    try {

        const res = await axios.get(`${baseUrl}/${endpoints.checkFavorites}`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { ids: tracks.join(',') },
        })

        const { data, status } = res;

        if (status === 200) {
            return data
        } else {
            return []
        }

    } catch (err) {
        console.log('[Error] getFavoritesTracks', err)
        return []
    }


}