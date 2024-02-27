import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {MovieDetails} from "../../components/MovieDetails/MovieDetails";
import {IMovieBig} from "../../interfaces";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {


    const {movieId} = useParams<string>();

    const [movieReady, setMovieReady] = useState<IMovieBig>(null)
    useEffect(() => {
        movieService.byId(+movieId).then(({data})=>setMovieReady(data));
    }, [movieId]);


    return (
        <div>
            <MovieDetails movie={movieReady}/>
        </div>
    );
};

export {MovieDetailsPage}