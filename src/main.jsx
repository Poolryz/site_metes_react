import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<App />}
            />
            <Route
                path=":id"
                element={<ProductPage />}
            />
        </Routes>
    </BrowserRouter>
)
