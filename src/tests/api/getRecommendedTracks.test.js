import { getRecommendedTracks } from "../../api/requests/getRecommendedTracks";
import { demoTracks } from "../fixtures/demoTracks";


jest.mock("../../api/requests/getRecommendedTracks");

describe('test getRecommendedTracks', () => {

    test('Should be return data of getRecommendedTracks', async () => {

        getRecommendedTracks.mockImplementationOnce(() =>
            Promise.resolve( demoTracks.tracks )
        )

        const tracks = await getRecommendedTracks('latin')
        expect( tracks ).toEqual( demoTracks.tracks );
        expect( getRecommendedTracks ).toHaveBeenCalledTimes(1);
        expect( getRecommendedTracks ).toHaveBeenCalledWith('latin');

    })

})