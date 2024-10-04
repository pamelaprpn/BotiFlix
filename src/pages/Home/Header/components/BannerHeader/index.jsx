import { useEffect, useState } from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';


export default function BannerHeader(){

  const apiMovies = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1'

    const [movies, setMovies] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
      buscarMovies();
    }, []);

    const buscarMovies = async () => {
        try{
          const response = await fetch(apiMovies, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            'Content-Type': 'application/json'
          }
          });

          if(!response.ok){
            throw new Error('Dados não foram retornados');
          }

          const respMovies = await response.json();
          setMovies(respMovies.results);


        }catch(error){
          setErro(error.message);
        }
    };


  return(
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        // autoplay={{delay: 5000, disableOnInteraction: false}}
        pagination={{clickable: true}}
        centeredSlides={true}

      >
      <S.ContainerBannerHeader>
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
            <S.ContainerImg>
                  <S.BannerImgHeader
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  />
                  <S.ContainerInfos>
                    <S.TitleBannerHeader>{movie.original_title}</S.TitleBannerHeader>
                    <S.OverviewBannerHeader>{movie.overview}</S.OverviewBannerHeader>
                  </S.ContainerInfos>
            </S.ContainerImg>
            </SwiperSlide>
          ))}

        </S.ContainerBannerHeader>
        </Swiper>
    </>
  )
}
