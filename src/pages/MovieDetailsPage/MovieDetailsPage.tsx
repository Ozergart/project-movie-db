import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components";
import {IMdbRes, IMovieBig} from "../../interfaces";
import {movieService, omDbService} from "../../services";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {


    const {movieId} = useParams<string>();
    const [IMDB_res, setIMDB_res] = useState<IMdbRes>()
    const [IMDB_id, setIMDB_id] = useState<string>('')
    const [movieReady, setMovieReady] = useState<IMovieBig>(null)
    useEffect(() => {
        movieService.byId(+movieId).then(({data})=>setMovieReady(():IMovieBig=>{
            setIMDB_id(data.imdb_id)
            return  data
        }));
        if (IMDB_id&&IMDB_id.length>0){
            omDbService.getById(IMDB_id).then(({data})=>setIMDB_res(data))
        }
    }, [IMDB_id, movieId]);


    return (
        <div>
            <MovieDetails movie={movieReady} imdb={IMDB_res}/>
        </div>
    );
};

export {MovieDetailsPage}