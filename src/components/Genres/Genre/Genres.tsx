import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {genreService} from "../../../services";
import css from './Genre&Genres.module.css'
import {useAppContext} from "../../../hooks";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren {
    genre_ids: number[]
    horisontal?: boolean
}

const Genres: FC<IProps> = ({genre_ids, horisontal = true}) => {
    const {setAllGenres, allGenres} = useAppContext()
    const [nGenres, setNGenres] = useState<string[]>([])
    let genresMassive: string[] = []

    useEffect(() => {
        if (allGenres.length === 0) {
            genreService.getAll().then(({data}) => setAllGenres(data.genres))
        }
        if (genre_ids) {
            genreService.idsToNames(genre_ids, genresMassive, allGenres)
            setNGenres(genresMassive)
        } else {
            setNGenres(["GenresError"])
        }
    }, [allGenres, genre_ids]);

    return (
        <div className={horisontal ? css.Genres : css.GenresVertical}>
            {nGenres.map(genre => <Genre genre={genre} key={genre}/>)}
        </div>
    );
};
export {Genres}