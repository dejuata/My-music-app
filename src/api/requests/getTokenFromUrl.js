export const getTokenFromUrl = (hash) => {

    const { access_token, expires_in } = hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
    
    return { access_token, expires_in };
}