import React from 'react'
import MovieList from "./MovieList"

import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  
  const movies=useSelector((store)=>store.movies);
  console.log(movies);
   
 
  return movies.NowPlayingMovies && (
     <div className=' bg-black'>
     <div className='-mt-40 pl-2 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;