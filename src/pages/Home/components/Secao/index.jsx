import ListaDeBanners from '../ListaDeBanners';
import './Secao.css'

const Secao = (props) => {
    return (
        <section className='lista'>
            <h2>{props.titulo}</h2>            
            <ListaDeBanners url={props.url} showTitulo={props.showTitulo}/>
        </section>
    )
}

export default Secao;