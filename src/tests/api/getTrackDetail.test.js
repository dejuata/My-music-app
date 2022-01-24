import { getTrackDetail } from "../../api/requests/getTrackDetail";
import { demoTracks } from "../fixtures/demoTracks";



jest.mock("../../api/requests/getTrackDetail");

describe('test getTrackDetail', () => {

    test('Should be return data of getTrackDetail', async () => {

        getTrackDetail.mockImplementationOnce((value) => {
            const [ track ] = demoTracks.tracks.filter(track => track.id === value)
            return Promise.resolve( track )
        })

        const tracks = await getTrackDetail('1')
        expect( tracks ).toEqual( demoTracks.tracks[0] );
        expect( getTrackDetail ).toHaveBeenCalledTimes(1);
        expect( getTrackDetail ).toHaveBeenCalledWith('1');

    })

})