import React from "react"
import './Gallery.css'


export default function Gallery(){
  let complementos = [
    {
        image:"imagens-da-g/g-img-1.jpg",
        id:"b1"
    },
  
    {
        image:"imagensda-g/g-img-2.jpg",
        id:"b2"
    },
  
    {
        image:"imagens-da-g/g-img-3.jpg",
        id:"b3"
    }];
    
    return (
        <div class="g-div">
          <div class="titul-div">
            <h1 class="g-titulo">Lançamentos !!!</h1>
          </div>
          <div>
            <img class="img-g" src=""/>
          </div>
          <div class="div-sm">
            <button id="" class="s-m">Saiba Mais</button>
          </div>
        </div>
    )
}

