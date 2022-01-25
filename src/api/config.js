export const config = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authorizeUrl: process.env.REACT_APP_AUTHORIZE_URL,
    redirectUrl: process.env.REACT_APP_REDIRECT_URL,
}


export const endpoints = {
    recommendations: 'recommendations',
    tracks: 'tracks',
    me: 'me',
    favorites: 'me/tracks',
    checkFavorites: 'me/tracks/contains',
    albums: 'albums'
}

export const baseUrl = 'https://api.spotify.com/v1';