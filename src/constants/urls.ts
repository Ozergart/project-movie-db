

const baseURL = 'https://api.themoviedb.org/3'
const search = '/search'
const discover = '/discover'
const find = '/find'
const movie = '/movie'
const genres = '/genres'

const urls = {
    'discover': {
        'movies': discover+movie
    },
    'find': {},
    'search': {}
}

export {
    baseURL,
    urls
}