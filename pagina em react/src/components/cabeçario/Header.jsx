import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
<header>
    <div className="topo">
        <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" alt="logo" className="logo-icon"/>
        <input type="text" placeholder=" Pesquisar"  className="pesquisa"/> 
        <button className="pesquisa-b">Pesquisar</button>
        <a href="#" className="Cadastro">Cadastrar</a>
        <button className="Login">Entrar</button> 
        <img className="Icon" src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/mini-cart.svg" alt="cart icon" />  
    </div>
    <hr></hr>
    <div className="navbar">
        <ul className="ul-nav">
            <Link to="home" className="links-l"><li>Home</li></Link>
            <Link href="#" className="links-l"><li>Produtos</li></Link>
            <Link href="#" className="links-l"><li>Contatos</li></Link>
        </ul>
    </div>
</header>
);
}
