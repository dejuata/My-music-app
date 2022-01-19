import axios from 'axios';
import { baseUrl, endpoints } from '../config';


export const deleteFavoriteTrack =  async (token, idTrack) => {

    try {

        const res = await axios.delete(
            `${baseUrl}/${endpoints.favorites}`,
            {
                headers: { Authorization: `Bearer ${token}` },
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