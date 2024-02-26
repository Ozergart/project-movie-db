import {FC, PropsWithChildren, useState} from 'react';


import css from './Movie.module.css'
import {IMovieRes} from "../../interfaces";
import {Rating, RoundedStar} from "@smastrom/react-rating";
import {Genres} from "../Genre";


interface IProps extends PropsWithChildren {
    movie:IMovieRes
}

const Movie: FC<IProps> = ({movie}) => {

    const {id,backdrop_path,poster_path,original_language,original_title,title,genre_ids,overview,popularity,video,release_date,vote_count,vote_average,adult} = movie

    const starStyle={
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    return (
  <div className={css.Movie}>
    <div>{}</div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>

   {/*/!*<div>original_title : {original_title}</div>*!/*/}
      <div><Genres genre_ids={genre_ids}/></div>
      <div>Назва : {title}</div>
    <Rating orientation={"horizontal"} value={3} radius={"small"} className={css.stars} readOnly={true}/>

   {/* <div>vote: {vote_average}</div>*/}
   {/*<div>popularity : {popularity}</div>*/}

   <div>release_date : {release_date}</div>
   {/*<div>vote_count : {vote_count}</div>*/}
   {/*<div>vote_average : {vote_average}</div>*/}

  </div>
 );
};

export {Movie}