import React, {useEffect, useState} from 'react';

import css from "./Movies.module.css"
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";
import {usePages} from "../../hooks";
import {GenresSearch} from "../AllGenres/GenresSearch";

const Movies = () => {

    const [query, setQuery] = useSearchParams({page:'1',idsWith:'18',idsWithout:'24'});
    const pageURL:number = +query.get('page')

    const [result, setResult] = useState<IMovie>({results:null, page:null, total_pages:null,total_results:null})
    const [movies, setMovies] = useState<IMovieRes[]>([])

    const withGenres:string = query.get('idsWith')
    const withoutGenres:string = query.get('indWithout')
    useEffect(() => {
        movieService.byGenres(pageURL,withGenres,withoutGenres).then(({data})=>
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
    }, [pageURL,query,withGenres,withoutGenres]);



    const pageDiv:JSX.Element = (
        <div className={css.pageDivBig}>
        <div className={css.pageDiv}>
            {!(pageURL - 1 === 0)?(<button onClick={() => usePages.change(setQuery,-1)}>Попередня</button>):null}
            {(pageURL-3>0)?(<button onClick={()=>usePages.change(setQuery,-3)}>{pageURL - 3}</button>):null}
            {(pageURL-2>0)?(<button onClick={()=>usePages.change(setQuery,-2)}>{pageURL - 2}</button>):null}
            {(pageURL-1>0)?(<button onClick={()=>usePages.change(setQuery,-1)}>{pageURL - 1}</button>):null}
            <p>{pageURL}</p>
            {(pageURL+1<501)&&(pageURL+1<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,1)}>{pageURL + 1}</button>):null}
            {(pageURL+2<501)&&(pageURL+2<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,2)}>{pageURL + 2}</button>):null}
            {(pageURL+3<501)&&(pageURL+3<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,3)}>{pageURL + 3}</button>):null}
            {!(pageURL - 500 === 0)&&!(pageURL-result.total_pages===0)?(<button onClick={() => usePages.change(setQuery,1)}>Наступна</button>):null}
        </div>
    </div>)


    return (
        <div className={css.Movies}>
            {pageDiv}
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            {pageDiv}
        </div>
    );
};

export {Movies}