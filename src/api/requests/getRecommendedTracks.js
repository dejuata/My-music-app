import { logout } from '../../actions/auth';
import { convertMillisToMinutesAndSeconds } from '../../helpers/convertMillisToMinutesAndSeconds';
import { truncateString } from '../../helpers/trucateString';
import { store } from '../../store/store';
import axiosInstance from '../axiosInstance';
import { endpoints } from '../config';
import { checkFavoritesTracks } from './checkFavoritesTracks';


export const getRecommendedTracks =  async (category) => {

    let tracks = [];
    let idTracks = [];
    try {
        const limit = 50;

        const res = await axiosInstance.get(`/${endpoints.recommendations}?seed_genres=${category}&limit=${limit}`)

        const { data, status } = res;

        if (status === 200) {
            tracks = data.tracks.map( track => {
                // Almacenar ids para verificar si estan checkeados como favoritos
                idTracks.push(track.id);
                return {
                    id: track.id,
                    name: track.name,
                    name_short: truncateString(track.name),
                    album: track.album.name,
                    artists: track.artists[0].name,
                    duration: convertMillisToMinutesAndSeconds(track.duration_ms),
                    image: track.album.images[1].url,
                    favorite: false
                }
            })
        }

        // Verificar la lista de canciones obtenidas si están marcadas
        // como favoritas
        const idChecked = await checkFavoritesTracks(idTracks)

        // Asignar favorito
        tracks = tracks.map( (track, index) => {
            return {
                ...track,
                favorite: idChecked[index]
            }
        })

        return tracks;

    } catch (err) {
        console.log('[Error] getRecommendedTracks', err)
        store.dispatch( logout() )
        return tracks
    }


}