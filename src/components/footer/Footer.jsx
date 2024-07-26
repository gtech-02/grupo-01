import React from "react";
import './Footer.css'

export default function Footer() {
  return (<>
    <footer className="footer">
      <div className="container">
        <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" alt="logo" className="logo-f" />
        <div className="row row-cols-4">
          <div className="footer-col">
            <h3>Informção</h3>
            <ul className="list">
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
            <ul className="list">
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Bonés</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Tênis</a></li>
            </ul>

          </div>
          <div className="footer-col">
            <h3>Siga</h3>
            <div className="social-links">
              <a href="#"><img
                src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/instagram.svg"
                width="30px" /></a>
              <a href="#"><img
                src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/facebook.svg"
                width="15px" /></a>
              <a href="#"><img
                src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/twitter.svg"
                width="30px" /></a>
            </div>
            <button type="button" className="button">Central de Atendimento</button>
          </div>
          <div className="footer-col">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3545215968225!2d-38.51298212518801!3d-3.7326780962412194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2b1d%3A0x38e3b25bd5d38768!2sDigital%20College%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1721656411251!5m2!1spt-BR!2sbr" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>

      </div>
    </footer>
  </>
  )
}
