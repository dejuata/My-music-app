import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";

describe('Test useForm', () => {

    const initialForm = {
        name: 'Juan David',
        email: 'jdpino@gmail.com'
    }

    test('should be return default form', async () => {

        const { result } = renderHook( () => useForm(initialForm));
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm )
        expect( typeof handleInputChange ).toBe( 'function' )
        expect( typeof reset ).toBe( 'function' )
    })

    test('should be change value form', async () => {

        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Camilo'
                }
            });
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Camilo' })

    })

    test('should be restore the form', async () => {

        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Camilo'
                }
            });

            reset();
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm )

    })

})