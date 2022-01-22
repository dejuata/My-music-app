import { removeFavorite, setFavorites } from "../../actions/favorite";
import { types } from "../../types/types"

describe('Test favoriteActions', () => {

    test('should be all actions work', () => {

        const payload = '1';

        const setFavoritesAction = setFavorites(payload);

        expect( setFavoritesAction ).toEqual({
            type: types.setFavorites,
            payload
        });

        const removeFavoriteAction = removeFavorite(payload);

        expect( removeFavoriteAction ).toEqual({
            type: types.removeFavorite,
            payload
        });
    })
})