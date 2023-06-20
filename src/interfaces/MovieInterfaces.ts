export interface MovieInterface {
    title: string,
    date: string,
    duration: number,
    genres: GenreInterface[],
    description: string
    image: string,
    video: VideoInterface | null,
    watchProviders: watchProvidersInterface[] | null,
}

export interface watchProvidersInterface {
    logo_path: string,
    provider_name: string,
}

export interface VideoInterface {
    key: string,
    site: string,
}

export interface GenreInterface {
    id: number,
    name: string,
}