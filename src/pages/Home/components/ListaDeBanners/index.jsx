import { useEffect, useState } from "react";
import Banner from "../../../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import './ListaDeBanners.css'

const ListaDeBanners = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`;
        const token = import.meta.env.VITE_API_KEY;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
        }
        try{   
            fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                setResults(response.results)
            })
        }catch(error) {
            console.log(error.message); //FAZER TRATAMENTO DE ERROS
        }
    }, []);


    return (
        <Swiper
            slidesPerView={2.3}
            spaceBetween={0}
        >   
            {results.map(result => 
                <SwiperSlide key={result.id}>
                    <Banner 
                        key={result.id}
                        titulo={result.original_name} 
                        src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                    />
                </SwiperSlide>)}
        </Swiper>
        
    )
}

export default ListaDeBanners;