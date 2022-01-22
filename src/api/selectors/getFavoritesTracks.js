import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import { truncateString } from '../../helpers/trucateString';
import axiosInstance from '../axiosInstance';
import { endpoints } from '../config';


export const getFavoritesTracks =  async () => {

    let tracks = [];
    try {

        const res = await axiosInstance.get(`/${endpoints.favorites}?limit=50`)

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