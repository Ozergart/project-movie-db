import { genreService } from "../services";
import {IGenre} from "../interfaces";
import {useEffect, useState} from "react";

const useMoviesIds = async (idMass: number[]): Promise<string[]>=> {
    let genresMassive: IGenre[] =[];
    let genres: string[] = [];
    const [genreList, setGenreList] = useState([])


    useEffect(() => {
        if (genresMassive.length === 0) {
                 genreService.getAll().then(({data}) => {
                genresMassive = data.genres;
            })
        }
        idMass.forEach(id => {
            const genre = genresMassive.find(genre => genre.id === id);
            if (genre) {
                genres.push(genre.name)
            }
        });
        setGenreList(genres)

    }, []);

    return genreList

};

export { useMoviesIds };