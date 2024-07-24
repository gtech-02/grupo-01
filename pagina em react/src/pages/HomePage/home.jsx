import React from 'react'
import Slide from '../../components/Slide/Slide'
import Galeria from '../../components/tres-magens/Galeria'
import { Layout } from '../../Layout'
import ListagemHome from '../../components/cards da home/CardsHomefunc'
function Home() {

  return (
    <>
      <Layout>
        <Slide />
        <Galeria />
        <ListagemHome/>
      </Layout>
    </>
  )
}

export default Home
