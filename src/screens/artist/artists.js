import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from "../../redux/actions/index";
import ArtistView from './artistsView';

import getArtists from '../../helpers/getArtists';

const Artist = () => {
    const artists = useSelector((state) => state.artists);
    const dispatch = useDispatch();

    const page_previous = () => {
        let page = parseInt(artists.topartists['@attr'].page) - 1
        getArtistsList(page)
    }
    const page_next = () => {
        let page = parseInt(artists.topartists['@attr'].page) + 1
        getArtistsList(page);
    }
    const getArtistsList = async (page) => {
        let response = await getArtists(page);
        response != 'error' && dispatch(actions.artists.addArtists(response))
    }
    useEffect(() => {
        getArtistsList(1);
    }, [])

    return(
        <ArtistView 
            artists={artists}
            page_previous={() => page_previous()}
            page_next={() => page_next()}
        />
    );
}

export default Artist