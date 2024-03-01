import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "./Movies.module.css"
import {IMovie, IMovieRes} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "../Movie/Movie";
import {usePages} from "../../hooks";
import {DateSorting, Original_titleSorting, PopularitySorting, RevenueSorting} from "../Sortings";
import {GenreDeleting} from "../Genres/GenreDeleting";



const Movies = () => {
    const [query, setQuery] = useSearchParams(
        {page:'1',idsWith:'',idsWithout:'',queryParam:'',sort_by:"popularity.desc"});
    const pageURL:number = +query.get('page')
    const sorting = query.get('sort_by')

    const [result, setResult] = useState<IMovie>({results:null, page:null, total_pages:null,total_results:null})
    const [movies, setMovies] = useState<IMovieRes[]>([])

    const queryParam:string = query.get('queryParam')
    const withGenres:string = query.get('idsWith')
    const withoutGenres:string = query.get('indWithout')


    useEffect(() => {

        if (query.get('queryParam') && query.get('queryParam').length > 0){
            movieService.search(pageURL,queryParam).then(({data})=>setResult(()=>{
                const {results,page ,total_results,total_pages} = data
                setMovies(results)
                return{
                    results,
                    page,
                    total_results,
                    total_pages
                }
            }))
        }else {
        movieService.byGenres(pageURL,sorting,withGenres,withoutGenres).then(({data})=>
            setResult(()=>{
            const {results,page ,total_results,total_pages} = data
                setMovies(results)
            return{
                results,
                page,
                total_results,
                total_pages
            }
        }))}
    }, [pageURL, query, queryParam, withGenres, withoutGenres,sorting]);



    const pageDiv:React.ReactElement = (
        <div className={css.pageDivBig}>
        <div className={css.pageDiv}>
            {/*{!(pageURL - 1 === 0)?(<button onClick={() => usePages.change(setQuery,-1)}>Попередня</button>):null}*/}
            {(pageURL-3>0)?(<button onClick={()=>usePages.change(setQuery,-3)}>{pageURL - 3}</button>):null}
            {(pageURL-2>0)?(<button onClick={()=>usePages.change(setQuery,-2)}>{pageURL - 2}</button>):null}
            {(pageURL-1>0)?(<button onClick={()=>usePages.change(setQuery,-1)}>{pageURL - 1}</button>):null}
            <p>{pageURL}</p>
            {(pageURL+1<501)&&(pageURL+1<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,1)}>{pageURL + 1}</button>):null}
            {(pageURL+2<501)&&(pageURL+2<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,2)}>{pageURL + 2}</button>):null}
            {(pageURL+3<501)&&(pageURL+3<result.total_pages)?(<button onClick={()=>usePages.change(setQuery,3)}>{pageURL + 3}</button>):null}
            {/*{!(pageURL - 500 === 0)&&!(pageURL-result.total_pages===0)?(<button onClick={() => usePages.change(setQuery,1)}>Наступна</button>):null}*/}
        </div>
    </div>)


    return (
          <div className={css.bigCont}>
              {movies.length>0?<div>
                      <div className={css.MovieHeader}>
                          <div className={css.genreDeliting}>
                            <GenreDeleting query={query} setQuery={setQuery}/>
                          </div>
                          {pageDiv}
                          <div className={css.sortingCont}>{!queryParam ? <div className={css.sorting}>
                              <p>Сортувати за:</p>
                              <PopularitySorting setQuery={setQuery} query={query}/>
                              <RevenueSorting setQuery={setQuery} query={query}/>
                              <DateSorting setQuery={setQuery} query={query}/>
                              {/* eslint-disable-next-line react/jsx-pascal-case */}
                              <Original_titleSorting setQuery={setQuery} query={query}/>
                          </div> : null}</div>
                      </div>
                      <div className={css.Movies}>{movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
                      <div className={css.bottomPages}>{pageDiv}</div>
              </div>:
                  <div className={css.Nothing}>Вибачте  за вашим запитом нічого не знайдено</div>
              }
        </div>
    );
};

export {Movies}