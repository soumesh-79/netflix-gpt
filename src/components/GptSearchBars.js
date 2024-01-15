import React from 'react'
import { useRef } from 'react';
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchBars = () => {
    const searchText=useRef(null);
    const dispatch=useDispatch();


     const SearchMovieTMDB= async(movie)=>{
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
        return json.results;
     }
    const handelGptSearchClick = async() =>{
        // console.log(searchText.current.value);
        // make api call to get movie resuly 
        const gptQuery="Act as a Movie Recomendation system and suggest some movies for the query" + searchText.current.value+"only me name of 5 movies, coma separated like the examle result given ahead. Example:gadar,Sholay,Bahubali,Dhamal,Krish";
        const gptResults=await openai.chat.completions.create({
            messages: [{ role: 'user', content:gptQuery}],
            model: 'gpt-3.5-turbo',
          });

          if(!gptResults.choices){
            console.log("gpt api fail");
          }
          console.log(gptResults.choices?.[0]?.message.content);
          const gptMovies=gptResults.choices?.[0]?.message.content.split(",");
        //  gpt movies gives the array of movies with comma separated 

        // each movie I will searcj tmdb api

        const promiseArray=gptMovies.map(movie=>SearchMovieTMDB(movie))
        //   [promises,promises,promises,promises,promises] it gives promises
          const tmdbResults =  await Promise.all(promiseArray);
          console.log(tmdbResults);

          dispatch(addGptMovieResult({movieNmaes:gptMovies,movieResults:tmdbResults}))
    };  
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className=' w-1/2 bg-black grid grid-cols-12 rounded-lg ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-2 m-4 col-span-9' placeholder='What would you like to watch today?' />
            <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handelGptSearchClick}>Search</button>
        </form>
    </div>
  )
}
export default GptSearchBars