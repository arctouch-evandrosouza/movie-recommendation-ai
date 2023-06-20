/*

- input
- send information


*/
import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import { movies } from "@/mock/movie"

export default function Search({setRecommendations, setIsLoading} : {setRecommendations: Function, setIsLoading: Function})  {

    const maxInputLength = 10;

    const [search, setSearch] = useState('');
    const [inputLength, setInputLength] = useState(0);


    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        setInputLength(search.length)
    }, [search])


    const handleSearch = () => {
        if(search) {
            setIsLoading(true)
            setTimeout(() => {
                setRecommendations(movies) 
                setIsLoading(false)
            }, 3000)
            console.log("🚀 ~ file: index.tsx:33 ~ handleSearch ~ search:", search)
        }
            

        console.log("🚀 ....")
    };
        



    return (<div className={styles.search}>
        <input type="text" placeholder='Try now...' maxLength={maxInputLength} onChange={handleChange} value={search} />
        <p>{inputLength}/{maxInputLength}</p>
        <button onClick={handleSearch}>Send</button>
    </div>)
}