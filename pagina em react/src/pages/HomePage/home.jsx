import React from 'react'
import Header from '../../components/cabeçario/Header'
import Footer from '../../components/footer/Footer'
import Slide from '../../components/Slide/Slide'
import Gallery from '../../components/tres-magens/Gallery'
import { Layout } from '../../Layout' 
function Home() {

  return (
    <>
    <Header/>
    <Slide/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home
