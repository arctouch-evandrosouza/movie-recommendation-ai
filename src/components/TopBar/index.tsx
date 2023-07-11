import Title from '../Title'
import styles from './styles.module.scss'
import React from 'react'
import { LANGUAGES } from '../../_i18n/languages';


export default function TopBar({ text, setLanguage }: { text: string, setLanguage: Function }) {

    const handleLanguage = (language: string) => {
        setLanguage(language)
    }

    return (<header className={styles.header}>
        <div className={styles.logo}>
        <svg width="33" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="16.9765" width="32.0388" height="20.0235" rx="4" fill="#D9D9D9"/>
            <path d="M33.7476 23.1794L44 18.2823V26.9882H33.7476V23.1794Z" fill="#D9D9D9"/>
            <path d="M33.7476 30.2324L44 35.3743V26.2331H33.7476V30.2324Z" fill="#D9D9D9"/>
            <ellipse cx="7.90291" cy="8.92351" rx="6.62136" ry="6.74706" fill="#D9D9D9"/>
            <ellipse cx="23.4951" cy="7.83529" rx="7.68932" ry="7.83529" fill="#D9D9D9"/>
            </svg>

            <Title text={text} heading='h1' /></div>
        <ul> {LANGUAGES.languages.map((language: any) => <li onClick={() => setLanguage(language.value)} key={language.value}>{language.value}</li>)}</ul>
    </header>)
}
