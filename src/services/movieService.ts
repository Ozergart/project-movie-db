import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieBig} from "../interfaces";

const movieService = {
    byId:(id:number):IRes<IMovieBig> => apiService.get(urls.movies.byId(id), {'params':{'language':'uk'}}),
    getAll:(page:number = 1, sort_by:string , with_genres?:string, without_genres?:string):IRes<IMovie>=>apiService.get(urls.movies.base, {params:{page:`${page}`,'language':'uk',with_genres:with_genres,without_genres:without_genres,sort_by:sort_by}}),
    search:(page:number = 1, queryParam:string):IRes<IMovie>=>apiService.get(urls.movies.search, {'params':{'page':`${page}`,'query':queryParam,'language':'uk'}})
}

export {
    movieService
}