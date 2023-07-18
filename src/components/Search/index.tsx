
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'

export default function Search({ setRecommendations, setIsLoading, currentLanguage, setIsError }: { setRecommendations: Function, setIsLoading: Function, setIsError: Function, currentLanguage: any }) {

    const maxInputLength = 100;

    const [search, setSearch] = useState('');
    const [inputLength, setInputLength] = useState(0);

    const handleInputLength = (value: string) => {
        setInputLength(value.length)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        handleInputLength(event.target.value)
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            setSearch(event.target.value.value)
            handleInputLength(event.target.value)
            handleSearch()
        }
    };

    const handleSearch = async () => {
        if (search) {

            setRecommendations([])
            setIsLoading(true)
            setIsError(false)

            const searchUrl = `api/search?search=${search}&language=${currentLanguage.language}`
            const response = await fetch(searchUrl)
            const jsonData = await response.json()
            const movies = jsonData.movies;
            console.log("🚀 ~ file: index.tsx:39 ~ handleSearch ~ movies:", movies)

            if (movies && movies.length > 0) {
                setRecommendations(movies)
            } else {
                setIsError(true)
            }
            setIsLoading(false)
        }

    };

    return (<div className={styles.search}>
        <input type="text" onKeyDown={handleKeyDown} placeholder={currentLanguage.search_placeholder} maxLength={maxInputLength} onChange={handleChange} value={search} arial-label={currentLanguage.search_aria_label} />
        <p>{inputLength}/{maxInputLength}</p>
        <button onClick={handleSearch}
            arial-label={currentLanguage.search_button_aria_label}
            id="search"
            name="search"
            value={search}>{currentLanguage.search_button}</button>
    </div>)
}