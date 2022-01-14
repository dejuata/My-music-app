import { config } from "../config";

export const getUrlLogin = () => {
    const { authorizeUrl, clientId, redirectUrl } = config;
    const scopes = ['user-library-modify', 'user-library-read'];

    return `${authorizeUrl}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&show_dialog=true`;
}