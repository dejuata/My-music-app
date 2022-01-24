import { getFavoritesTracks } from "../../api/requests/getFavoritesTracks";
import { demoFavorites } from "../fixtures/demoFavorites";


jest.mock("../../api/requests/getFavoritesTracks")

describe('test getFavoritesTracks', () => {

    test('Should be return data of getFavoritesTracks', async () => {

        getFavoritesTracks.mockImplementationOnce(() =>
            Promise.resolve( demoFavorites.tracks )
        )

        const tracks = await getFavoritesTracks()
        expect( tracks ).toEqual( demoFavorites.tracks );
        expect( getFavoritesTracks ).toHaveBeenCalledTimes(1);

    })

})