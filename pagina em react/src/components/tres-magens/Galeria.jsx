import FuncGallery from "./FuncGallery";
import gallery from "./gallery";
import React from "react";

export default function Galeria(){
let GaleriaFeita = [];

  for (let i = 0; i < gallery.length; i++) {
    GaleriaFeita.push(
      <FuncGallery gallery={gallery[i]} />
    );
  }

  return <section className="element">{GaleriaFeita} </section>
}

