
//import * as dotenv from "dotenv";
import { NextResponse, NextRequest } from 'next/server'
//import { movies } from "@/mock/movie"
import { getMoviesData } from '@/services/themoviedb'
import { getMoviesFromChatGPT } from '@/services/chatgpt'
 
export async function GET(request: NextRequest) {

  let movies = {}

  const { searchParams } = new URL(request.url)
  const search: string | null = searchParams.get('search')
  const language: string | null = (searchParams.get('language')) ? searchParams.get('language') : 'en-US';

  if(!search) return NextResponse.json({  })


 const chatGPTMovies = await getMoviesFromChatGPT(search, language)
 
  //console.log("🚀 ~ file: route.ts:20 ~ GET ~ chatGPTMovies:", chatGPTMovies)
  // const chatGPTMovies = `{
  //   "movies": [
  //     "Jurassic Park",
  //     "Alien"
  //   ]
  // }`;

  if(!chatGPTMovies) return NextResponse.json({ movies })

  const moviesNamesArray = JSON.parse(chatGPTMovies).movies;

  if(!moviesNamesArray) return NextResponse.json({ movies })

  movies = await getMoviesData(moviesNamesArray, language)
   
  return NextResponse.json({ movies })
}