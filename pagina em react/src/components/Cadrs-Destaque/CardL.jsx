import React from "react";
import './CardL.css'

export default function CardL({complementos}) {
    return (
        <div className="Lanç-compl">
            <div className="Lanç-texto">
                <h1 className="Lanç">Lançamentos</h1>
            </div>
            <div className="Card-Lanç">
                <div className="Lanç-img-D">
                    <img className="Lanç-img" src={complementos.image} alt="imagecard" />
                </div>
                <div className="Lanç-texto">
                    <h2 className="Lanç-nome">{complementos.nome}</h2>
                    <h3 className="L">{complementos.qualidades}</h3>
                    <h2 className="Lanç-preço">{complementos.preço}</h2>
                    <button className="Lanç-Bt">COMPRA !!!</button>
                </div>
            </div>
        </div>
    )
}