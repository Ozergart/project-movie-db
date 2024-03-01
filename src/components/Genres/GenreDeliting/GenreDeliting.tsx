import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {SetURLSearchParams} from "react-router-dom";
import {genreService} from "../../../services";
import {useAppContext} from "../../../hooks";
import {GenreDel} from "./GenreDel";

interface IProps extends PropsWithChildren {
    query:URLSearchParams
    setQuery:SetURLSearchParams
}

const GenreDeliting: FC<IProps> = ({query,setQuery}) => {
    const [genres, setGenres] = useState<string[]>([])
    const {allGenres} = useAppContext()


    const stringMass = genreService.paramsToString(query,'idsWith')

    useEffect(() => {
        const ids:number[]=stringMass.map(string=>+string)
        const genresName: string[] = [];
        genreService.idsToNames(ids, genresName, allGenres);
        setGenres(genresName);

    }, [query]);

    console.log(genres);


    return (
        <div>

            {genres&&genres.length>0?(<div>
                {genres.map(genre => (
                    <GenreDel key={genre} genre={genre} added={'idsWith'}/>
                ))}
            </div>):null}

        </div>
    );
};

export {GenreDeliting}