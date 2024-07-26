import React from "react"
import './Gallery.css'


export default function FuncGallery({gallery}) {


  return (
    <div className="g-div">
      <div className="titul-div">
        <h1 className="g-titulo">Lançamentos !!!</h1>
      </div>
      <div>
        <img className="img-g" src={gallery.image} />
      </div>
      <div className="div-sm">
        <button id={gallery.id} className="s-m">Saiba Mais</button>
      </div>
    </div>
  )
}