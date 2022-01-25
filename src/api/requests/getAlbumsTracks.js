import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import { truncateString } from '../../helpers/trucateString';
import { endpoints } from '../config';
import axiosInstance from '../axiosInstance';


export const getAlbumsTracks =  async (idAlbum) => {

    let tracks = [];
    try {

        const res = await axiosInstance.get(`/${endpoints.albums}/${idAlbum}/tracks`)

        const { data, status } = res;

        if (status === 200) {
            tracks = data.items.map( track => {
                return {
                    id: track.id,
                    name: track.name,
                    name_short: truncateString(track.name),
                    artists: track.artists[0].name,
                    duration: convertMillisToMinutesAndSeconds(track.duration_ms),
                }
            })
        }

        return tracks;

    } catch (err) {
        console.log('[Error] getAlbumsTracks', err)
        return tracks
    }


}