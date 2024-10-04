import { useEffect, useState } from "react";
import Header from "./Header";
import * as S from "./style";
import TvSeries from "./components/Secao";
import TrendingMovies from "./components/Secao" //APENAS DE TESTE/EXEMPLO

export default function Home(){  

  const urlTvSeries = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1` 
  const urlTrendingMovies = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`

  return (
    <>
      <Header />
      <div className="body" style={{color: 'white'}}>
        <TvSeries titulo={'TV Series'} url={urlTvSeries} showTitulo={true}/>
        <TrendingMovies titulo={'Trending Movies'} url={urlTrendingMovies} showTitulo={true}/>
      </div>
    </>
  )
 }

