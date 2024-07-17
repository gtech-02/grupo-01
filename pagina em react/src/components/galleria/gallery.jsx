import React from "react"

function gallery(complementos){
    console.log(complementos)
    return (
        `<div class="g-div">
          <div class="titul-div">
            <h1 class="g-titulo">Lançamentos !!!</h1>
          </div>
          <div>
            <img class="img-g" src="${complementos.image}"/>
          </div>
          <div class="div-sm">
            <button id="${complementos.id}" class="s-m">Saiba Mais</button>
          </div>
        </div>`
    )
}

export default gallery()