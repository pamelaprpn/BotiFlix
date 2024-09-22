import { useState } from "react";
import "./Banner.css"

const Banner = (props) => {
    return (
        
        <div className="banner">
            <img src={props.src} alt={props.titulo}/>
            { props.showTitulo ? <h3>{props.titulo}</h3> : null}
        </div>
    )
}
export default Banner;