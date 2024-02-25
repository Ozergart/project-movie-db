import React, {useEffect, useState} from 'react';
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const [query, setQuery] = useSearchParams();
    const page:number = +query.get('page')

    const [result, setResult] = useState<IMovie>({results:null,page:null,total_pages:null,total_results:null})
    const [movies, setMovies] = useState<IMovieRes[]>([])
    useEffect(() => {
        movieService.getAll(page|| 1).then(({data})=>
            setResult(()=>{
            const {results,page,total_results,total_pages} = data
                setMovies(results)
            return{
                results,
                page,
                total_results,
                total_pages
            }
        }))
    }, [page]);
    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies}