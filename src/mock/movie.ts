import { MovieInterface } from "../interfaces/MovieInterfaces";

const movies: MovieInterface[] = [{
    title: 'Lorem Ipsum',
    date: '11/11/1111',
    duration: 111,
    genres: [
      { id: 16, name: "Animation" },
      { id: 14, name: "Fantasy" },
    ],
    description: 'movie.overview',
    image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    video: {
      key: 'M-QEW0k-uIo',
      site: 'YouTube',
    },
    watchProviders: [
      {
        logo_path: "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
        provider_name: "Disney Plus"
      }
    ],
    id: 0
  }];

export { movies };
