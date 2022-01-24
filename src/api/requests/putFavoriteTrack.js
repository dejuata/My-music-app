import axiosInstance from '../axiosInstance';
import { endpoints } from '../config';


export const putFavoriteTrack =  async (idTrack) => {

    try {

        const res = await axiosInstance.put(
            `/${endpoints.favorites}`,
            {},
            {
                params: { ids: idTrack}
            }
        )

        const { status } = res;

        if (status === 200) {
            console.log('put favorites', res)
            return res
        }

    } catch (err) {
        console.log('[Error] putFavoriteTrack', err)
    }


}