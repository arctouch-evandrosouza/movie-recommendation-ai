//import fetch from "node-fetch";

export async function getMoviesData(movieData: any) {
  let output: any = [];
  let moviesIds: any = [];

  const baseConfigSearch =
    "&include_adult=false&language=en-US&page=1&append_to_response=videos";
  const baseConfigIds = "?append_to_response=videos&language=en-US";

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
        .catch((err) => console.error("error:" + err));
      moviesIds.push(response.results[0].id);
    })
  );

  // console.log(
  //   "🚀 ~ file: themoviedb.js:29 ~ awaitPromise.all ~ moviesIds:",
  //   moviesIds
  // );
  //search for movies by id
  await Promise.all(
    moviesIds.map(async (id: any) => {
      const url = `${process.env.MOVIE_API_URL_IDS}${id}${baseConfigIds}`;
     // console.log("🚀 ~ file: themoviedb.js:36 ~ awaitPromise.all ~ url:", url);
      const response = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json)
        .catch((err) => console.error("error:" + err));

      output.push(response);
    })
  );

 // console.log("🚀 ~ file: themoviedb.js:30 ~ getMoviesData ~ output:", output);
  return output;
}


export async function  getMoviesWatchProvides(movie_id: any) {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.MOVIE_API_KEY,
    },
  };


  const url = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`;
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error("error:" + err));
  console.log("🚀 ~ file: themoviedb.ts:72 ~ getMoviesWatchProvides ~ response:", response)
  return response.results;

}
