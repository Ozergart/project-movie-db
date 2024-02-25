

const baseURL = 'https://api.themoviedb.org/3'
const search = '/search'
const discover = '/discover'
const find = '/find'
const movie = '/movie'
const genres = '/genre'

const urls = {
    'discover': {
        'movies': discover+movie
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