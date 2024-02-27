import {FC, PropsWithChildren} from 'react';

import css from './Genre&Genres.module.css'
import {Link} from "react-router-dom";
import {genreService} from "../../services";
import {useAppContext} from "../../hooks";
interface IProps extends PropsWithChildren {
 genre:string
}

const Genre: FC<IProps> = ({genre}) => {

 const {allGenres} = useAppContext();

 return (
  <Link to={`http://localhost:3000/movies/?page=1&idsWith=${genreService.nameToId(genre, allGenres)}`} className={css.Genre}>
     {genre}
  </Link>
 );
};

export {Genre}