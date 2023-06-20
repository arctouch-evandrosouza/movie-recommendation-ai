import styles from './styles.module.scss'
import  React from 'react'
import Image from 'next/image'

export default function RecommendationImage({url, alt}: { url: string, alt: string}) {
    return(
    <div className={styles.recommendationImage_image}><Image
        src={url}
        alt={alt}
        width={350}
        height={150}
    /></div>
    )
}