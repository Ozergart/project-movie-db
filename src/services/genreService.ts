import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre, IGenresRes} from "../interfaces";

const genreService = {
    getAll:():IRes<IGenresRes>=>apiService.get(urls.genres.uk),
    idsToNames:(ids:number[],massive:string[],allGenres:IGenre[]):void=>{
        ids.forEach(id=>{
            allGenres.map(genre=>{
                if(genre.id === id){
                    massive.push(genre.name);
                }
            })
        })
    },
    objectToIds:(genres:IGenre[]):number[]=>{
        const massive:number[] =[]
        genres.map(genre=>{
            massive.push(genre.id)
        })
        return  massive
    }
}
export {
    genreService
}