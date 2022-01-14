export const config = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authorizeUrl: process.env.REACT_APP_AUTHORIZE_URL,
    redirectUrl: process.env.REACT_APP_REDIRECT_URL,
}


export const endpoints = {
    recommendations: 'recommendations',
    me: 'me',
    newReleases: 'browse/new-releases',
    favorites: 'me/tracks',
    checkFavorites: 'me/tracks/contains',
}

export const baseUrl = 'https://api.spotify.com/v1';