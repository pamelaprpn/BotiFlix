import { useEffect, useState } from "react";
import Banner from "../../../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import './ListaDeBanners.css'

const ListaDeBanners = (props) => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        const apiUrl = props.url;
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
            console.log(error.message);
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
                        showTitulo = {props.showTitulo}
                        key={result.id}
                        titulo={result.original_name || result.original_title} 
                        src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                    />
                </SwiperSlide>)}
        </Swiper>
        
    )
}

export default ListaDeBanners;