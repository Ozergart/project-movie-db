import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenresRes} from "../interfaces";

const genreService = {
    getAll:():IRes<IGenresRes>=>apiService.get(urls.genres.uk)
}
export {
    genreService
}