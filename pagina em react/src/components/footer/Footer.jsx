import React from "react";
import './Footer.css'

export default function Footer(){
    return(<>
        <div className="footer-img">
      <img
        src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-footer.svg"/>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3>Informção</h3>
            <ul>
              <li><a href="#">Sobre Drip Store</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="#">Meus Pedidos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Categorias</h3>
            <ul>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Bonés</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Tênis</a></li>
            </ul>
            <button type="button" className="button">Central de Atendimento</button>
          </div>
          <div className="footer-col">
            <h4>Siga</h4>
            <div className="social-links">
              <a href="#"><img
                  src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg"
                  width="30px"/></a>
              <a href="#"><img
                  src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg"
                  width="15px"/></a>
              <a href="#"><img
                  src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg"
                  width="30px"/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    )
}
