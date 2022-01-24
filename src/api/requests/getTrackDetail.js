import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import axiosInstance from '../axiosInstance';
import { baseUrl, endpoints } from '../config';



export const getTrackDetail =  async (trackId) => {

    let track = {};
    try {

        const res = await axiosInstance.get(`${baseUrl}/${endpoints.tracks}/${trackId}`)

        // console.log(res)

        const { data, status } = res;
        if (status === 200) {

            track = {
                id: data.id,
                name: data.name,
                album: data.album.name,
                album_date: data.album.release_date,
                artists: data.artists[0].name,
                duration: convertMillisToMinutesAndSeconds(data.duration_ms),
                image: data.album.images[1].url,
                external_url : data.external_urls.spotify
            }
        }

        return track;

    } catch {
        console.log('[Error] getRecommendedTracks')
        return track
    }


}