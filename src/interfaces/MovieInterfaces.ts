export interface MovieInterface {
    id: number,
    title: string,
    date: string,
    duration: number,
    genres: GenreInterface[],
    description: string
    image: string,
    video: VideoInterface,
    watchProviders: watchProvidersInterface[] | null,
}

export interface watchProvidersInterface {
    logo_path: string,
    provider_name: string,
}

export interface VideoInterface {
    key: string | null,
    site: string | null,
}

export interface GenreInterface {
    id: number,
    name: string,
}