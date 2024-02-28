import React, {useEffect, useState} from 'react';

import css from './Header.module.css'
import {GenresSearch} from "../AllGenres";
import {Link} from "react-router-dom";
import {User} from "../User/User";
import {Search} from "../Search/Search";
import {IEvent} from "../../types";
import {movieService} from "../../services";
import {IMovieRes} from "../../interfaces";
import {MovieMini} from "../MovieMini/MovieMini";
import {useAppContext} from "../../hooks";

const Header = () => {

    const [genreSearchTrigger, setGenreSearchTrigger] = useState<boolean>(false)
    const [searchTrigger, setSearchTrigger] = useState<boolean>(false)
    const [fastSearch, setFastSearch] = useState<string>('')
    const [moviesSearch, setMoviesSearch] = useState<IMovieRes[]>([])
    const {darkTheme,setDarkTheme}=useAppContext()
    const input = document.getElementById('input') as HTMLInputElement
    const search =()=>{
        setGenreSearchTrigger(true)
    }
    const searchFilm = ()=>{
        setSearchTrigger(true)
    }
    const fastSearchValue = (e:IEvent):void=> {
        setFastSearch(e.target.value)
    }
    useEffect(() => {
        movieService.search(1,fastSearch).then(({data})=>setMoviesSearch(data.results))
    }, [fastSearch]);

    const fastSearchClosing = () => {
        input.value = ''
        setMoviesSearch([])
    }
    const themeSwitch = ()=>{
        setDarkTheme(prev=>!prev)
    }




    return (
        <div className={css.Header}>
            <Link to={''}><h1>MovieDB</h1></Link>
            <div className={css.switch}>
                {darkTheme?<img width="30" height="30" src="https://img.icons8.com/emoji/48/crescent-moon-emoji.png" alt="crescent-moon-emoji"/>:null}
                <div className={css.switch2} onClick={themeSwitch}></div>
                {!darkTheme?<img className={'sun'} width="30" height="30" src="https://img.icons8.com/officel/16/sun.png" alt="sun"/>:null}
            </div>
            <div className={css.links}>
                <button onClick={search}>Пошук по жанрам</button>
                <button onClick={searchFilm}>Розширений пошук</button>
            </div>

            <div className={css.fastSearch}>
                <input type="text" onChange={fastSearchValue} id={'input'} placeholder={'Швидкий пошук'}/>
                {moviesSearch.length>0?<div  onMouseLeave={fastSearchClosing} className={css.fastSearchDiv}>{moviesSearch.map(movie => <MovieMini key={movie.id} movie={movie}/>)}</div>:null}
            </div>
            <User/>
            {genreSearchTrigger?<GenresSearch setGenreSearchTrigger={setGenreSearchTrigger}/>:null}
            {searchTrigger?<Search setSearchTrigger={setSearchTrigger}/>:null}
        </div>
    );
};

export {Header}