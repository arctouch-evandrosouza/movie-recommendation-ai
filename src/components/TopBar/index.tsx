/*

- load  text 

*/
import Title from '../Title'
import styles from './styles.module.scss'
import  React from 'react'

export default function TopBar({ text } : { text: string}) {
    return(<header className={styles.header}><Title text={ text } heading='h1' /></header>)
}