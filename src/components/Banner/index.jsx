import "./Banner.css"

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.src} alt={props.titulo}/>
            <h3>{props.titulo}</h3>
        </div>
    )
}
export default Banner;