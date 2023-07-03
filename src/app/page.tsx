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
import { LANGUAGES } from '../_i18n/languages';
import { TextLanguageSelector } from "../utils/utils"


export default function Home() {
 

  const [language, setLanguage] = useState(LANGUAGES.default)
  const [currentLanguage, setCurrentLanguage] = useState(Object)
  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setCurrentLanguage(TextLanguageSelector(language))
  },[language])
  

  return (
    <>
      <TopBar text={currentLanguage.header_text} setLanguage={setLanguage} />
      <div className={styles.text}>
        <Title text={currentLanguage.home_line1} heading='h2' />
        <Text text={currentLanguage.home_line2} />
        <br />

        <Text text={currentLanguage.home_line3} />
        <Text text={currentLanguage.home_line4} />
      </div>
      <Search setRecommendations={setRecommendations} setIsLoading={setIsLoading} currentLanguage={currentLanguage}/>

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
