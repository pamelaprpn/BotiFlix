import ListaDeBanners from '../ListaDeBanners';
import './MinhaLista.css'

const MinhaLista = (props) => {
    return (
        <section className='lista'>
            <h2>{props.titulo}</h2>            
            <ListaDeBanners />
        </section>
    )
}

export default MinhaLista;