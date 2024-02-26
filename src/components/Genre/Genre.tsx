import {FC, PropsWithChildren} from 'react';

import css from './Genre&Genres.module.css'
interface IProps extends PropsWithChildren {
 genre:string
}

const Genre: FC<IProps> = ({genre}) => {

 return (
  <div className={css.Genre}>
     {genre}
  </div>
 );
};

export {Genre}