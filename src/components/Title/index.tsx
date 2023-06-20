/*

- load  text 

*/
import styles from './styles.module.scss'
import React from 'react'


export default function Title({ text, heading }: { text: string, heading: string }) {
    switch (heading) {
        case 'h1':
            return (<><h1 className={styles.title}>{text}</h1></>)
        case 'h2':
            return (<><h2 className={styles.title}>{text}</h2></>)
        case 'h3':
            return (<><h3 className={styles.title}>{text}</h3></>)
        default:
            return (<>{ text }</>)
    }
}