import React from 'react'
import Produtoslistingpage from './pages/ProductListingPage/Productlistingpage'
import Home from './pages/HomePage/home'
import Cardlist from './components/Cadrs/Cardlist'
import { Layout } from './Layout'
function App() {

  return (
    <>
    <Layout>
        <Cardlist/>
    </Layout>
    </>
  )
}

export default App
