import React from "react";
import CardL from "./CardL";
import gallery from "../tres-magens/gallery";

export default function CardLFeito(){
    let CardsL = []

    for (let i = 0; i < gallery.length; i++){
        CardsL.push(
            <CardL  complementos={gallery[i]}/>
        );}
        return <section className="lanç-completo">{CardsL}</section>

}