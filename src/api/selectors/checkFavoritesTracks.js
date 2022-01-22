import axiosInstance from '../axiosInstance';
import { baseUrl, endpoints } from '../config';


export const checkFavoritesTracks =  async (tracks) => {

    try {

        const res = await axiosInstance.get(`${baseUrl}/${endpoints.checkFavorites}`, {
            params: { ids: tracks.join(',') },
        })

        const { data, status } = res;

        if (status === 200) {
            return data
        }


    } catch (err) {
        console.log('[Error] getFavoritesTracks', err)
        return []
    }


}