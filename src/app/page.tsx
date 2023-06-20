"use client"
import RecommendationBox from "@/components/RecommendationBox"
import Search from "@/components/Search"
import TopBar from "@/components/TopBar"
import { movies } from "@/mock/movie"
import { MovieInterface } from "@/interfaces/MovieInterfaces"
import styles from "@/styles/styles.module.scss"
import Title from '@/components/Title'
import Text from '@/components/Text'
import { useEffect, useState } from "react"
import Loading from "@/components/Loading"

export default function Home() {

  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (

    <>
      <TopBar text="MOVIES RECOMMENDATION" />
      <div className={styles.text}>
        <Title text='What do you want to watch today?' heading='h2' />

        <Text text='I&apos;m going to try to find some movies for you, and I would like some tips...' />
        <br />

        <Text text='Describe in few word what you wanna watch example:' />
        <Text text='Dinosaur theme park turns deadly adventure or Epic space saga with lightsabers battles...' />
      </div>
      <Search setRecommendations={setRecommendations} setIsLoading={setIsLoading} />

      {recommendations.length > 0 &&
        <>
          <div className={styles.text}>
            <Title text='We got some suggestions for you....' heading='h3' />
          </div>

          <div className={styles.content}>
            {recommendations.map((movie: MovieInterface) => <RecommendationBox key={movie.title} movie={movie} />)}
          </div>
        </>
 }
 
 {isLoading && <Loading />}
    </>
  )
}
