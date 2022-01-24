import { putFavoriteTrack } from "../../api/requests/putFavoriteTrack";

jest.mock("../../api/requests/putFavoriteTrack");


describe('test putFavoriteTrack', () => {

    test('Should be return data of putFavoriteTrack', async () => {

        putFavoriteTrack.mockImplementationOnce((idTrack) => {
            return Promise.resolve( {
                ok: true
            } )
        })

        const res = await putFavoriteTrack("1")
        expect( res ).toEqual( { ok: true } );
        expect( putFavoriteTrack ).toHaveBeenCalledWith("1")

    })

})