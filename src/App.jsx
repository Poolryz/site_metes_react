import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import CatalogComponent from './components/layout/CatalogComponent/CatalogComponent.jsx'
import HeaderComponent from './components/layout/HeaderComponent/HeaderComponent.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route
                    path="/catalog"
                    element={<CatalogComponent />}
                />
                <Route
                    path="/catalog/:id"
                    element={<ProductPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
