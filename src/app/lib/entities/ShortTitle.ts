export interface ShortTitle {
    id: number,
    title: string,
    year: number,
    imdb_id: string,
    tmdb_id: number | null,
    tmdb_type: string,
    type: string
}

export const ShortTitleTypeMapper = [
    {
        type: "movie",
        map: "Movie"
    },
    {
        type: "tv_series",
        map: "TV Series"
    },
    {
        type: "tv_miniseries",
        map: "TV Mini-Series"
    }
]


// Example:  {
//     "id": 1247225,
//     "title": "Spy Cat",
//     "year": 2018,
//     "imdb_id": "tt5746054",
//     "tmdb_id": 509733,
//     "tmdb_type": "movie",
//     "type": "movie"
// }
