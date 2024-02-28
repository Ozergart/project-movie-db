

const baseURL = 'https://api.themoviedb.org/3'
const search = '/search'
const discover = '/discover'
const movie = '/movie'
const genres = '/genre'
const user = '/account'

const urls = {
    'movies': {
        'base': discover+movie,
        'byId':(id:number)=> `${movie}/${id}`,
        'search': search+movie
    },
    'user':{
       'base': user
    },
    'genres': {
        'uk':`${genres}${movie}/list?language=uk`}
}

export {
    baseURL,
    urls
}