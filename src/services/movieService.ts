import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie} from "../interfaces";

const movieService = {
    getAll:(page:number = 1):IRes<IMovie> =>apiService.get(urls.discover.movies,{'params':{'page':`${page}`,'language':'uk'}})
}

export {
    movieService
}