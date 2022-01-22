import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types"

describe('Test uiActions', () => {

    test('should be all actions work', () => {

        const msg = '[Error]';

        const action = setError(msg);

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: msg
        });

        const removeErrorAction = removeError();

        expect( removeErrorAction ).toEqual({
            type: types.uiRemoveError,
            payload: null
        });

        const startLoadingAction = startLoading();

        expect( startLoadingAction ).toEqual({
            type: types.uiStartLoading
        });

        const finishLoadingAction = finishLoading();

        expect( finishLoadingAction ).toEqual({
            type: types.uiFinishLoading
        });
    })
})