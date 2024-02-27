import {FC, PropsWithChildren} from 'react';

import css from './MovieDetails.module.css'
import {IMovieBig} from "../../interfaces";
import {Rating, RoundedStar} from "@smastrom/react-rating";
import {Genres} from "../Genre";
import {genreService} from "../../services";


interface IProps extends PropsWithChildren {
movie:IMovieBig
}

const MovieDetails: FC<IProps> = ({movie}) => {
    if (!movie) {
        return <div>Loading...</div>;
    }



    const {
        budget,
        production_companies,
        production_countries,
        belongs_to_collection,
        id,
        vote_count,
        vote_average,
        poster_path,
        title,
        original_title,
        original_language,
        backdrop_path,
        genres,
        adult,
        video,
        overview,
        release_date,
        popularity,
    } = movie;
    console.log(genres);
    const backdrop:string = belongs_to_collection?.backdrop_path || backdrop_path
    const starStyle={
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    };
    console.log(genres);

    return (
        <div className={css.MovieDetails} style={{ 'backgroundImage': `url(https://image.tmdb.org/t/p/w500${backdrop})` }}>
            <div className={css.bigCont}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`постер фільму ${title}`}/>
                <div className={css.smallCont}>
                    <div className={css.flex}>
                        <h2>{title}</h2>
                        <div className={css.starsCont}>
                            <Rating className={css.stars} orientation={"horizontal"} value={vote_average / 2}
                                   radius={"small"} readOnly={true} halfFillMode={"svg"} itemStyles={starStyle}/>
                            <p>Всього оцінок {vote_count}, середня {(vote_average / 2).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className={css.genres}>Жанр:<Genres genre_ids={genreService.objectToIds(genres)}/></div>
                    <p>Дата виходу:{release_date}</p>
                    <div>
                        Країна/Країни:
                        {production_countries.map((country, index) => (
                            <span key={index}>{country.name}    , </span>
                        ))}
                    </div>
                    <div>
                        Компанія виробник:
                        {production_companies.map((company,index:number)=>(
                            <span key={index}>{company.name} ,</span>
                            )

                        )}
                    </div>

                    <p>Бюджет: {budget}</p>
                    <p>Назва оригіналу:{original_title}</p>
                    <p>{overview}</p>
                </div>
            </div>

        </div>
    );
};

export {MovieDetails}