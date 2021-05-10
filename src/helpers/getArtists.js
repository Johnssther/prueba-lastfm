import {Alert} from 'react-native'

const getArtists = async (page = 1, country = 'spain') => {
    try {
        const API_KEY = '829751643419a7128b7ada50de590067';
        const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json&page=${page}`;
        const response = await fetch(url);
        const artists = await response.json();
        if(artists.error) {
            Alert.alert('Error de servicio',`${artists.error}. ${artists.message}`);
            return 'error';
        }
        return artists;
    } catch (error) {
        if(error == 'TypeError: Network request failed') {
            Alert.alert('Error','No tienes conexión a internet');
            return 'error'
        } else {
            Alert.alert('Error','Ha ocurrido un error inesperado');
            return 'error'
        }
    }
}

export default getArtists;


/**
 const previous = () => {
        let page = parseInt(artists.topartists['@attr'].page);
        if(page - 1 < 1) {
            setBtnprevious(true)
        } else {
       //     getArtistsList(page - 1);
        }
    }

    const next = () => {
        let page = parseInt(artists.topartists['@attr'].page);
        if(page + 1 > 1) {
            setBtnprevious(false)
        }
      //  getArtistsList(page + 1);
    }

    const getArtistsList = (page) => {
        let response = getArtists(page);
       // setArtists(response);
        // dispatch(actions.artists.addArtists(response))
    }

    useEffect(() => {
        // getArtistsList(1);
    }, [])
     
 
 * 
 */