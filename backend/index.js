import { getMoviesData } from "./themoviedb.js";
import { getMoviesFromChatGPT } from "./node-chatgpt-api.js";
import * as dotenv from "dotenv";
dotenv.config()
import util from 'util';


import jsonData from './mock-movies.json' assert {type: 'json'};
//let content = "suggest 2 movies genre terror, released until 2020, answer just the names separated by comma";
//let content = "recommend me a film, It's a film about someone with an extremely destructive eating addiction caused by grief and regret and the complete lack of self-worth, release after 2021"
let movies = "Avengers, Batman, Superman".split(",")
//let movieschat = await getMoviesFromChatGPT(content)
//console.log("🚀 ~ file: index.js:10 ~ movieschat:", movieschat)
//  movieschat = movieschat.split(",")
 const moviesData = await getMoviesData(movies)
 //console.log(JSON.stringify(moviesData)) 
 console.log(util.inspect(moviesData, false, 5, true /* enable colors */))
