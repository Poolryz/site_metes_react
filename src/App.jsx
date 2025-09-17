import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import CatalogComponent from './components/layout/CatalogComponent/CatalogComponent.jsx'
import HeaderComponent from './components/layout/HeaderComponent/HeaderComponent.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'
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
                <HeaderComponent
                    categorys={categorys}
                    category={category}
                    setCategory={setCategory}
                    searchProducts={searchProducts}
                    setSearchProducts={setSearchProducts}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<h1>MAIN</h1>}
                    />
                    <Route
                        path="/catalog"
                        element={
                            <CatalogComponent
                                categorys={categorys}
                                category={category}
                                setCategory={setCategory}
                                searchProducts={searchProducts}
                                setSearchProducts={setSearchProducts}
                            />
                        }
                    />
                    <Route
                        path="/catalog/:id"
                        element={<ProductPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
