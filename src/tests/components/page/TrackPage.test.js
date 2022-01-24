import { TrackPage } from "../../../components/pages/track/TrackPage";
import { mount } from 'enzyme';
import { useTrackDetail } from "../../../hooks/useTrackDetail";

jest.mock("../../../hooks/useTrackDetail")

describe('Test TrackPage', () => {

    test('Should be render TrackPage', () => {

        useTrackDetail.mockReturnValue({
            data: {},
            loading: true
        })

        const wrapper = mount(<TrackPage />)

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render info', () => {

        useTrackDetail.mockReturnValue({
            data: {
                id: '1',
                name: 'Desnúdate Mujer',
                name_short: 'Desnúdate Mujer',
                album: "Voy Pa'Encima",
                artists: 'Frankie Ruiz',
                duration: '4:47',
                image: 'https://i.scdn.co/image/ab67616d00001e021386b29ab009dd27c398d141',
                url: 'https//url-track'
            },
            loading: false
        })

        const wrapper = mount(<TrackPage />)

        expect( wrapper.find('.home__loading').exists() ).toBe( false );
        expect( wrapper.find('.o-track-detail').exists() ).toBe( true );
        expect( wrapper.find('.o-track-detail__body-title h2').text().trim() ).toBe( 'Desnúdate Mujer')

    })

})