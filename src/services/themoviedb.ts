import {
  MovieInterface,
  VideoInterface,
  watchProvidersInterface,
} from "@/interfaces/MovieInterfaces";

export async function getMoviesData(movieData: any, language: string | null) {
  let output: any = [];
  let moviesIds: any = [];

  const resultLanguage = language ?? "en-US";

  const baseConfigSearch = `&include_adult=false&language=${resultLanguage}&page=1&append_to_response=videos`;
  const baseConfigIds = `?append_to_response=videos&language=${resultLanguage}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.MOVIE_API_KEY,
    },
  };

  //search for movies by name
  await Promise.all(
    movieData.map(async (movie: any) => {
      const url = `${
        process.env.MOVIE_API_URL_SEARCH
      }movie?query=${movie.replace(" ", "+")}${baseConfigSearch}`;
      const response = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => {
          return console.error("error:" + err);
        });
      if (response.results[0]?.id) {
        moviesIds.push(response.results[0].id);
      }
    })
  );

  //search for movies by id
  await Promise.all(
    moviesIds.map(async (id: any) => {
      const url = `${process.env.MOVIE_API_URL_IDS}${id}${baseConfigIds}`;
      const response = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.error("error:" + err));
      output.push(response);
    })
  );

  const movies = await handleRawMovieResponse(output, resultLanguage);
  return movies;
}

const handleRawMovieResponse = async (rawMovieData: any, resultLanguage: string) => {
  const movies: MovieInterface[] = [];

  await Promise.all(
    rawMovieData.map(async (movie: any) => {
      const trailer = getTrailer(movie.videos);

      const watchProviders = await getWatchProvides(movie.id, resultLanguage);

      movies.push({
        id: movie.id,
        title: movie.title,
        date: movie.release_date,
        duration: movie.runtime,
        genres: movie.genres,
        description: movie.overview,
        image: process.env.MOVIE_IMG_URL + movie.poster_path,
        video: trailer,
        watchProviders,
      });
    })
  );

  return movies;
};

const getTrailer = (videos: any): VideoInterface => {
  const selectedVideo = videos.results.filter(
    (video: any) => video.type === "Trailer"
  );

  let video: VideoInterface = {
    key: null,
    site: null,
  };

  if (selectedVideo) {
    video = {
      key: selectedVideo[0]?.key ? selectedVideo[0].key : null,
      site: selectedVideo[0]?.site ? selectedVideo[0].site : null,
    };
  }

  return video;
};

const getWatchProvides = async (movieId: number, resultLanguage: string) => {
  let providers: watchProvidersInterface[] = [];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.MOVIE_API_KEY,
    },
  };

  const url = `${process.env.MOVIE_API_URL_IDS}${movieId}/watch/providers`;
  const watchProviders = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error("error:" + err));

  if (!watchProviders) return providers;

  if (resultLanguage === "en-US") {
    if (watchProviders.results.US?.flatrate !== undefined) {
      watchProviders.results.US.flatrate.forEach(
        (provider: { logo_path: string; provider_name: any }) =>
          providers.push({
            logo_path: "https://image.tmdb.org/t/p/w500" + provider.logo_path,
            provider_name: provider.provider_name,
          })
      );
    }
  } else if (resultLanguage === "pt-BR") {
    if (watchProviders.results.BR?.flatrate !== undefined) {
      watchProviders.results.BR.flatrate.forEach(
        (provider: { logo_path: string; provider_name: any }) =>
          providers.push({
            logo_path: "https://image.tmdb.org/t/p/w500" + provider.logo_path,
            provider_name: provider.provider_name,
          })
      );
    }
  }

  return providers;
};
