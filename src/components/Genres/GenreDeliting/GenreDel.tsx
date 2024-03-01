import {FC, PropsWithChildren} from 'react';
import {genreService} from "../../../services";
import {useAppContext} from "../../../hooks";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre:string
    added:string
}

const GenreDel: FC<IProps> = ({genre,added}) => {
    const [query, setQuery] = useSearchParams(
        {page:'1',idsWith:'',idsWithout:'',queryParam:'',sort_by:"popularity.desc"});
    const {allGenres} = useAppContext()
    const  id = genreService.nameToId(genre, allGenres)
    genreService.genreRemovFromURL(id,query,setQuery,added)
    return (
        <div onClick={()=>genreService.genreRemovFromURL(id,query,setQuery,added)}>
            {genre}
        </div>
    );
};

export {GenreDel}