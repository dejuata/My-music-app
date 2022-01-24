import { getUserInfo } from "../../api/requests/getUserInfo";


jest.mock("../../api/requests/getUserInfo");

describe('test getUserInfo', () => {

    test('Should be return data of getUserInfo', async () => {

        getUserInfo.mockImplementationOnce((value) => {
            return Promise.resolve( {
                id: '1',
                displayName: 'Juan'
            } )
        })

        const user = await getUserInfo()
        expect( user ).toEqual( { id: '1', displayName: 'Juan' } );
        expect( getUserInfo ).toHaveBeenCalledTimes(1);

    })

})