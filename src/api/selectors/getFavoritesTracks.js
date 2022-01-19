import axios from 'axios';
import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import { truncateString } from '../../helpers/trucateString';
import { baseUrl, endpoints } from '../config';


export const getFavoritesTracks =  async (token) => {

    let tracks = [];
    try {

        const res = await axios.get(`${baseUrl}/${endpoints.favorites}`, {
            headers: { Authorization: `Bearer ${token}` },
        })

        const { data, status } = res;

        if (status === 200) {
            tracks = data.items.map( ({ track }) => {
                return {
                    id: track.id,
                    name: track.name,
                    name_short: truncateString(track.name),
                    album: track.album.name,
                    artists: track.artists[0].name,
                    duration: convertMillisToMinutesAndSeconds(track.duration_ms),
                    image: track.album.images[1].url,
                    favorite: true
                }
            })
        }

        return tracks;

    } catch (err) {
        console.log('[Error] getFavoritesTracks', err)
        return tracks
    }


}