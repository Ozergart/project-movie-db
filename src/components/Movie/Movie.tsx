import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {IMovieRes} from "../../interfaces";
import {useMoviesIds} from "../../hooks";
import {Genre} from "../Genre/Genre";
import {Genres} from "../Genre/Genres";

interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const Movie: FC<IProps> = ({movie}) => {
    const {id,backdrop_path,poster_path,original_language,original_title,title,genre_ids,overview,popularity,video,release_date,vote_count,vote_average,adult} = movie

    const [genreList, setGenreList] = useState([])
    let massive = useMoviesIds(genre_ids)


    return (
  <div>
    <div>{}</div>
   <div>poster_path : {poster_path}</div>

   <div>original_title : {original_title}</div>
   <div>title : {title}</div>
   <div><Genres genre_ids={genre_ids}/></div>


   <div>popularity : {popularity}</div>

   <div>release_date : {release_date}</div>
   <div>vote_count : {vote_count}</div>
   <div>vote_average : {vote_average}</div>

  </div>
 );
};

export {Movie}