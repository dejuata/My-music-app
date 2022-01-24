import { deleteFavoriteTrack } from "../../api/requests/deleteFavoriteTrack";


jest.mock("../../api/requests/deleteFavoriteTrack");


describe('test deleteFavoriteTrack', () => {

    test('Should be return data of deleteFavoriteTrack', async () => {

        deleteFavoriteTrack.mockImplementationOnce((idTrack) => {
            return Promise.resolve( {
                ok: true
            } )
        })

        const res = await deleteFavoriteTrack("1")
        expect( res ).toEqual( { ok: true } );
        expect( deleteFavoriteTrack ).toHaveBeenCalledWith("1")

    })

})