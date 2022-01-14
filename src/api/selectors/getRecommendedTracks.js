import axios from 'axios';
import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import { truncateString } from '../../helpers/trucateString';
import { baseUrl, endpoints } from '../config';



export const getRecommendedTracks =  async (category, token) => {
    console.log(category)
    let tracks = [];
    try {
        const limit = 10;

        const res = await axios.get(`${baseUrl}/${endpoints.recommendations}?seed_genres=${category}&limit=${limit}`, {
            headers: { Authorization: `Bearer ${token}` },
        })

        const { data, status } = res;

        if (status === 200) {
            tracks = data.tracks.map( track => {
                return {
                    id: track.id,
                    name: track.name,
                    name_short: truncateString(track.name),
                    album: track.album.name,
                    artists: track.artists[0].name,
                    duration: convertMillisToMinutesAndSeconds(track.duration_ms),
                    image: track.album.images[1].url
                }
            })
        }

        return tracks;

    } catch {
        console.log('[Error] getRecommendedTracks')
        return tracks
    }


}