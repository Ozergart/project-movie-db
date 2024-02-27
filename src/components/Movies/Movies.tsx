import React, {useEffect, useState} from 'react';

import css from "./Movies.module.css"
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const [query, setQuery] = useSearchParams({page:'1'});
    const pageURL:number = +query.get('page')

    const [result, setResult] = useState<IMovie>({results:null, page:null, total_pages:null,total_results:null})
    const [movies, setMovies] = useState<IMovieRes[]>([])
    useEffect(() => {
        movieService.getAll(pageURL).then(({data})=>
            setResult(()=>{
            const {results,page ,total_results,total_pages} = data
                setMovies(results)
            return{
                results,
                page,
                total_results,
                total_pages
            }
        }))
    }, [pageURL]);
    const next = ():void=>{
        setQuery('page': ((+query.get("page"))+1).toString())
    }
    return (
        <div className={css.Movies}>
            <button>prev</button>
            <button>next</button>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {Movies}