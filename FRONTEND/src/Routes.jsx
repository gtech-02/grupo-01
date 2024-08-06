import Home from "./pages/HomePage/HomePage"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductViewPage from './pages/ProductViewPage/ProductView';
import ProductListiningPage from './pages/ProductListingPage/Productlistingpage';
// import ProductsPage from './pages/ProductsPage';


const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/products" element={<ProductListiningPage />} />
                <Route path="/ProductViewPage" element={<ProductViewPage />} />
                {/* <Route path="/products-page" element={<ProductsPage />} /> */}
                <Route path='*' element={<Navigate to='/home' />} />
                <Route path="/ProductViewPage/:id" element={<ProductViewPage/>} />
            </Routes>
        </Router>
    );
}

export default Rotas;