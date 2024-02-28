import {FC, PropsWithChildren} from 'react';

import css from './MovieMini.module.css'
import {IMovieRes} from "../../interfaces";
import {useNavigate} from "react-router-dom";


interface IProps extends PropsWithChildren {
movie:IMovieRes
}

const MovieMini: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {id,title}= movie
    return (
        <div className={css.MovieMini} onClick={()=>navigate(`/movieDetails/${id}`)}>{title}</div>
    );
};

export {MovieMini}