/*

- load  video by url 

*/
import styles from './styles.module.scss'
import  React from 'react'

export default function Video({ url } : { url: string}) {
    return(<p>{ url }</p>)
}