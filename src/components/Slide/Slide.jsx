import React from 'react';
import './Slide.css'
import { Link } from "react-router-dom";

function Slide() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to='/Produtos'>
            <img src="https://i.postimg.cc/MKQR36H8/1.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to='/Produtos'>
            <img src="https://i.postimg.cc/kgNS9TW1/3.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
            </Link>
          </div>
          <div className="carousel-item" >
            <Link to='/Produtos/'>
            <img src="https://i.postimg.cc/T3QSxGHX/huge.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slide;