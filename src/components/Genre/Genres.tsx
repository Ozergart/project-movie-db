import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {genreService} from "../../services";
import css from './Genre&Genres.module.css'
import {useAppContext} from "../../hooks";
import {Genre} from "./Genre";


interface IProps extends PropsWithChildren {
    genre_ids:number[]

}

const Genres: FC<IProps> = ({genre_ids}) => {


    const {setAllGenres, allGenres} = useAppContext()
    const [nGenres, setNGenres] = useState<string[]>([])
    let genresMassive:string[] = []

        useEffect(() => {
            if (allGenres.length === 0) {
                genreService.getAll().then(({data}) => setAllGenres(data.genres))
            }
            genreService.idsToNames(genre_ids, genresMassive, allGenres)
            setNGenres(genresMassive)
        }, [allGenres, genre_ids,genresMassive]);

    return (
  <div className={css.Genres}>
    {nGenres.map(genre=><Genre genre={genre} key={genre}/>)}
  </div>
 );
};

export {Genres}