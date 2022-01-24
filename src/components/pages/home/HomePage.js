import { useSelector } from 'react-redux';
import { TrackList } from '../../organisms/TrackList/TrackList'

export const HomePage = () => {

    const { tracks } = useSelector(state => state.track);

    return (
        <>
            <div className='home__container-title'>
                <h2>Recommended</h2>
                <hr />
            </div>

            <TrackList tracks={ tracks } />
        </>
    )
}
