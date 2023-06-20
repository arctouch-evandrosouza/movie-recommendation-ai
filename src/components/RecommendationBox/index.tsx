
/*

- load image component
- load header component
- load title component
- load text component
- load streaming component
- load video component

*/
import styles from './styles.module.scss'
import React from 'react'
import { MovieInterface, GenreInterface } from '@/interfaces/MovieInterfaces'
import RecommendationWatchProviders from '../RecommendationWatchProviders'
import RecommendationImage from '../RecommendationImage'
import Video from '../Video'


export default function RecommendationBox({ movie }: { movie: MovieInterface }) {
    console.log("🚀 ~ file: index.tsx:20 ~ RecommendationBox ~ movie:", movie)
    return (<div className={styles.recommendation}>
        <div className={styles.image}>
            <RecommendationImage url={movie.image} alt={`Poster ${movie.title}`} />
        </div>
        <div>
            <div className={styles.text}>
                <h4>{movie.title}</h4>
                <small>{movie.date} | {movie.duration} min</small>
                <div className={styles.genres}><strong>Genre: </strong><ul>{movie.genres.map((genre: GenreInterface) => <li key={genre.name}>{genre.name}</li>)}</ul></div>
                <p>{movie.description}</p>

            </div>
            <div className={styles.streaming}>
                <RecommendationWatchProviders watchProviders={movie.watchProviders} />
            </div>
        </div>
        <div className={styles.video}>{ movie.video ? <Video videoKey={movie.video.key} site={movie.video.site} title={movie.title}/> : 'Trailer Not Found' }</div>


    </div>)
}