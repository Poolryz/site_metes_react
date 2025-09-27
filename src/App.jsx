import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import CatalogComponent from './components/layout/CatalogComponent/CatalogComponent.jsx'
import HeaderComponent from './components/layout/HeaderComponent/HeaderComponent.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'
import MainPage from './components/pages/MainPage/MainPage.jsx'
import data from './data.json'
import { changeCategory } from './utils/helpers'

function App() {
    let [category, setCategory] = useState('')
    let [searchProducts, setSearchProducts] = useState([])

    let categorys = [
        ...new Set(data.products.map((product) => product.category)),
    ]
    useEffect(() => {
        changeCategory(category, data, setSearchProducts)
    }, [category])

    return (
        <>
            <BrowserRouter>
                <HeaderComponent categorys={categorys} />
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage />}
                    />
                    <Route
                        path="/catalog/:type?"
                        element={
                            <CatalogComponent
                                category={category}
                                setCategory={setCategory}
                                searchProducts={searchProducts}
                                setSearchProducts={setSearchProducts}
                            />
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={<ProductPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
