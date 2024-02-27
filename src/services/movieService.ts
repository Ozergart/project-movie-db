

import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieBig} from "../interfaces";

const movieService = {
    getAll:(page:number = 1):IRes<IMovie> =>apiService.get(urls.movies.base,{'params':{page:`${page}`,'language':'uk'}}),
    byId:(id:number):IRes<IMovieBig> => apiService.get(urls.movies.byId(id), {'params':{'language':'uk'}}),
    byGenres:(page:number = 1, with_genres?:string,without_genres?:string):IRes<IMovie>=>apiService.get(urls.movies.base, {params:{page:`${page}`,'language':'uk',with_genres:with_genres,without_genres:without_genres}})
}

export {
    movieService
}