import {SetURLSearchParams} from "react-router-dom";

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
    },
    paramsToString:(query:URLSearchParams, param:string):string[]=>  query.get(param).split(','),
    genreRemovFromURL:(id:number,query:URLSearchParams,setQuery:SetURLSearchParams,param:string):number[]=> {
        const url: string[] = genreService.paramsToString(query, param)
        const index = url.indexOf(id + '')
        url.slice(index, 1)
        return url.map(str => +str)
    }}

    export {
    genreService
}