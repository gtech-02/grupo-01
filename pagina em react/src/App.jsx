import React from 'react'
import Produtoslistingpage from './pages/ProductListingPage/Productlistingpage'
import Home from './pages/HomePage/home'
import Cardlist from './components/Cadrs/Cardlist'
import { Layout } from './Layout'
import AppView from './pages/ProductViewPage/App'

function App() {

  return (
    <>
    <Layout>
        <Cardlist/>
        <AppView />
    </Layout>
    </>
  )
}

export default App
