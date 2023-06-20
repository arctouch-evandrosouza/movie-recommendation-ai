/*

- load  text 

*/
import styles from './styles.module.scss'
import  React from 'react'

export default function Text({ text } : { text: string}) {
    return(<div className={styles.text}><p>{text}</p></div>)
}