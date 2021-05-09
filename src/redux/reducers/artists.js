const initialState = {
    "topartists": {
        "artist": [
            {
                "name": "Vetusta Morla",
                "listeners": "124529",
                "mbid": "b185451a-9edd-46df-8046-1db7e9594f5a",
                "url": "https://www.last.fm/music/Vetusta+Morla",
                "streamable": "0",
                "image": [
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "small"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "medium"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "large"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "extralarge"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "mega"
                    }
                ]
            }
        ],
        "@attr": {
            "country": "Spain",
            "page": "1",
            "perPage": "50",
            "totalPages": "18826",
            "total": "941263"
        }
    }
}
function artists(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ARTISTS':
            return action.payload

        default:
            return state;
    }
}
export default artists
