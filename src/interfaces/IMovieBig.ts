import {ICompanie} from "./ICompanie";
import {IContry} from "./IContry";
import {ILanguage} from "./ILanguage";
import {IGenre} from "./IGenre";

export interface IMovieBig{
    adult:boolean,
    backdrop_path:string,
    genres:IGenre[],
    id:number,
    belongs_to_collection:{id:number,name:string,poster_path:string,backdrop_path:string}|null,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number,
    budget:number|null,
    production_companies:ICompanie[],
    production_countries:IContry[],
    spoken_languages:ILanguage[],
    status:string,
}