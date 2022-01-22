import { MemoryRouter } from "react-router-dom";
import { TrackDetail } from "../../../components/organisms/TrackDetail/TrackDetail";
import { demoTracks } from "../../fixtures/demoTracks";
import { mount } from 'enzyme';

describe('Test TrackDetail', () => {
    const track = demoTracks.tracks[0];

    const wrapper = mount(
        <MemoryRouter>
            <TrackDetail
                { ...track }
                />
        </MemoryRouter>
    )

    test('Should be render TrackDetail', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Should be render <SpotifyButton />', () => {

        expect( wrapper.find('SpotifyButton').exists() ).toBe(true);

    })
})