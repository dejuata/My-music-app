import { useTrackDetail } from "../../hooks/useTrackDetail";
import { renderHook } from '@testing-library/react-hooks';

describe('Test useTrackDetail', () => {

    test('should be return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useTrackDetail('123'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual( {} )
        expect( loading ).toBe( true )
    })
})