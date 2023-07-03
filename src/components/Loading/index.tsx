import styles from './styles.module.scss'
import React from 'react'
import Image from 'next/image'


export default function Loading() {
    return (<div className={styles.loading}><Image src='/load.gif' width={50} height={50} alt={'Loading'} /></div>)
}