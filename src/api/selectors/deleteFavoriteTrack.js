import axios from 'axios';
import axiosInstance from '../axiosInstance';
import { baseUrl, endpoints } from '../config';


export const deleteFavoriteTrack =  async (idTrack) => {

    try {

        const res = await axiosInstance.delete(
            `/${endpoints.favorites}`,
            {
                params: { ids: idTrack}
            }
        )

        const { status } = res;


        if (status === 200) {
            console.log('delete favorites', res)
        }

    } catch (err) {
        console.log('[Error] deleteFavoriteTrack', err)
    }


}