import React, {useState} from 'react';
import {useAppContext} from "../../hooks";
import {useNavigate} from "react-router-dom";
import {GenreSearch} from "./GenreSearch";

const GenresSearch = () => {
    const {allGenres,genresWithout,genresWith} = useAppContext();

    const [reset, setReset] = useState(false);

    const resetAllGenres = () => {
        setReset(true);
    };
    const navigate = useNavigate();


    const apply = ()=>{
        navigate(`/movies/?page=2&idsWith=${genresWith}&idsWithout=${genresWithout}`)
    }




    return (
        <div>
            {allGenres.map(genre=><GenreSearch key={genre.name} genre={genre} reset={reset} setReset={setReset}/>)}
            <button onClick={apply}>apply</button>
            <button onClick={resetAllGenres}>reset</button>
        </div>
    );
}

export {GenresSearch}