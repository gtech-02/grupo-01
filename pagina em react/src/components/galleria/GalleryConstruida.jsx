import React from "react";
import gallery from "./gallery";
import './gallery.css'

let complementos = [
    {
        image:"imagens da gallery/g-img-1.jpg",
        id:"b1"
    },

    {
        image:"imagens da gallery/g-img-2.jpg",
        id:"b2"
    },

    {
        image:"imagens da gallery/g-img-3.jpg",
        id:"b3"
    }
];

for(i = 0; i < gallery; i++){
    gallery(complementos) += i
}