import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre, IGenresRes} from "../interfaces";

const genreService = {
    getAll:():IRes<IGenresRes>=>apiService.get(urls.genres.uk),
    idsToNames: (ids: number[], massive: string[], allGenres: IGenre[]): void => {
        ids.forEach(id => {
            const genre = allGenres.find(genre => genre.id === id);
            if (genre) {
                massive.push(genre.name);
            }
        });
    },
    objectToIds: (genres: IGenre[]): number[] => {
        return genres.map(genre => genre.id);
    },
    nameToId:(name:string,allGenres:IGenre[]):number=>{
        const genre = allGenres.find((genre) => genre.name === name);
        return genre.id
    }
}
export {
    genreService
}