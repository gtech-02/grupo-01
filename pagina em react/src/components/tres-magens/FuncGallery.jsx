import React from "react"
import './Gallery.css'


export default function Gallery( {complementos} ){

    
    return (
        <div className="g-div">
          <div className="titul-div">
            <h1 className="g-titulo">Lançamentos !!!</h1>
          </div>
          <div>
            <img className="img-g" src={complementos.image}/>
          </div>
          <div className="div-sm">
            <button id={complementos.id} class="s-m">Saiba Mais</button>
          </div>
        </div>
    )
}