/*

- load  text 

*/
import styles from './styles.module.scss'
import  React from 'react'

export default function TopBar({ text } : { text: string}) {
    return(<header>{ text }</header>)
}