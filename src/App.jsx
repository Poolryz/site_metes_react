import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CatalogComponent from './components/layout/CatalogComponent/CatalogComponent.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'
function App() {
    return (
        <BrowserRouter>
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
