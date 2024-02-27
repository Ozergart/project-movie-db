

const baseURL = 'https://api.themoviedb.org/3'
const search = '/search'
const discover = '/discover'
const find = '/find'
const movie = '/movie'
const genres = '/genre'

const urls = {
    'movies': {
        'base': discover+movie,
        'byId':(id:number)=> `${movie}/${id}`
    },
    'find': {},
    'search': {},
    'genres': {
        'uk':`${genres}${movie}/list?language=uk`}
}

export {
    baseURL,
    urls
}