import Image from 'next/image'

import styles from './styles.module.scss'
import React from 'react'
import { watchProvidersInterface } from "@/interfaces/MovieInterfaces"

export default function RecommendationWatchProviders({ watchProviders }: { watchProviders: watchProvidersInterface[] | null }) {
    return (<>{watchProviders && <div className={styles.content}>
        Watch on: <ul>
            {watchProviders.map((provider: watchProvidersInterface) =>
                <li key={provider.provider_name} aria-label={provider.provider_name}>
                    <Image src={provider.logo_path} alt={provider.provider_name} width={30} height={30} />
                </li>
            )}
        </ul>
    </div>}</>)
}