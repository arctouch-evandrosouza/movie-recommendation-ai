/*

- load  text 

*/
import Title from '../Title'
import styles from './styles.module.scss'
import  React from 'react'
import { LANGUAGES } from '../../_i18n/languages';



export default function TopBar({ text, setLanguage } : { text: string, setLanguage: Function}) {

    const handleLanguage = (language: string) => { 
        setLanguage(language)
    }

    return(<header className={styles.header}>
        <Title text={ text } heading='h1' />
        <ul> {LANGUAGES.languages.map((language: any) => <li onClick={() => setLanguage(language.value)} key={language.value}>{ language.value }</li>)}</ul>
        </header>)
}