import styles from './styles.module.scss'
import React from 'react'
import { MovieInterface, GenreInterface } from '@/interfaces/MovieInterfaces'
import RecommendationWatchProviders from '@/components/RecommendationWatchProviders'
import RecommendationImage from '@/components/RecommendationImage'
import Video from '@/components/Video'
import Title from '@/components/Title'
import Text from '@/components/Text'


export default function RecommendationBox({ movie }: { movie: MovieInterface }) {
    console.log("🚀 ~ file: index.tsx:20 ~ RecommendationBox ~ movie:", movie)
    return (<div className={styles.recommendation}>
        <div className={styles.image}>
            <RecommendationImage url={movie.image} alt={`Poster ${movie.title}`} />
        </div>
        <div>
            <div className={styles.text}>
                <Title text={movie.title} heading={'h4'} />
                <small>{movie.date} | {movie.duration} min</small>
                <div className={styles.genres}><strong>Genre: </strong><ul>{movie.genres.map((genre: GenreInterface) => <li key={genre.name}>{genre.name}</li>)}</ul></div>
                <Text text={movie.description} />

            </div>
            <div className={styles.streaming}>
                <RecommendationWatchProviders watchProviders={movie.watchProviders} />
            </div>
        </div>
        <div className={styles.video}>{ movie.video ? <Video videoKey={movie.video.key} site={movie.video.site} title={movie.title}/> : 'Trailer Not Found' }</div>


    </div>)
}