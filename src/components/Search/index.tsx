/*

- input
- send information


*/
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'

export default function Search({setRecommendations, setIsLoading, currentLanguage} : {setRecommendations: Function, setIsLoading: Function, currentLanguage: any})  {

    const maxInputLength = 100;

    const [search, setSearch] = useState('');
    const [inputLength, setInputLength] = useState(0);


    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        setInputLength(search.length)
    }, [search])


    const handleSearch = async () => {
        if(search) {

            setRecommendations([])

            setIsLoading(true)

            const searchUrl = `${process.env.NEXT_PUBLIC_BASE_URL}api/search?search=${search}&language=${currentLanguage.language}`
            const response = await fetch(searchUrl)
            const jsonData = await response.json()
            const movies = jsonData.movies;

            if(movies && movies.length > 0) {
                setRecommendations(movies) 
            }
            setIsLoading(false)
        }
            
    };
        



    return (<div className={styles.search}>
        <input type="text" placeholder={currentLanguage.search_placeholder} maxLength={maxInputLength} onChange={handleChange} value={search} arial-label={currentLanguage.search_aria_label}/>
        <p>{inputLength}/{maxInputLength}</p>
        <button onClick={handleSearch} arial-label={currentLanguage.search_button_aria_label}>{currentLanguage.search_button}</button>
    </div>)
}