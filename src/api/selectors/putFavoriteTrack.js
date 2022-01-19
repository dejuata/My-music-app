import axios from 'axios';
import { baseUrl, endpoints } from '../config';


export const putFavoriteTrack =  async (token, idTrack) => {

    try {

        const res = await axios.put(
            `${baseUrl}/${endpoints.favorites}`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` },
                params: { ids: idTrack}
            }
        )

        const { status } = res;

        if (status === 200) {
            console.log('put favorites', res)
        }

    } catch (err) {
        console.log('[Error] putFavoriteTrack', err)
    }


}