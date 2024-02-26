import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IProps extends PropsWithChildren {
    genre_ids:number[]
}

const Genres: FC<IProps> = ({genre_ids}) => {

    const [allGenres, setAllGenres] = useState<IGenre[]>([])
    const genresMassive:string[] = []
    useEffect(() => {
        genreService.getAll().then(({data})=>setAllGenres(data.genres))
    }, []);


 return (
  <div>
      {}
  </div>
 );
};

export {Genres}