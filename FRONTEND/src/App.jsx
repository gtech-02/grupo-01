import React from 'react'
import Produtoslistingpage from './pages/ProductListingPage/Productlistingpage'
import Home from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import Filtros from './components/filtros/filtros'
import ProductView from './pages/ProductViewPage/ProductView'
import Contatos from './components/Contatos/Contatos'
import rotas from './Routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Produtos' element={<Produtoslistingpage />} />
          <Route path='/Produtos/:id' element={<ProductView />} />
          <Route path='/Contatos' element={<Contatos />} />
          {/* <Route path='/filtros' element={<Filtros /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;