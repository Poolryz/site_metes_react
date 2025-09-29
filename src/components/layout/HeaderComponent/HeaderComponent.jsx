import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../../assets/images/logo/LOGO.svg'
import data from '../../../data.json'
import { searchFunction } from '../../../utils/helpers'
import './HeaderComponent.scss'

function HeaderComponent({ categorys }) {
    let [popupCategoryActive, setPopuppopupCategoryActive] = useState(false)
    let [popupSearchActive, setPopupSearchActive] = useState(false)
    let [inputSearch, setInputSearch] = useState('')
    let [filterProduct, setFilterProduct] = useState([])
    const timeoutRef = useRef(null)
    let products = data.products
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])
    useEffect(() => {
        setFilterProduct(searchFunction(products, inputSearch))
    }, [inputSearch])

    return (
        <>
            <div className="header">
                <div className="header__body">
                    <div className="header__content _container">
                        <Link to="/">
                            <img
                                src={LOGO}
                                className="header__logo logo logo_bg-white"
                            />
                        </Link>

                        <div className="header__menu menu">
                            <ul className="menu__list">
                                <Link
                                    onMouseOver={(e) => {
                                        if (timeoutRef.current) {
                                            clearTimeout(timeoutRef.current)
                                        }

                                        setPopuppopupCategoryActive(true)
                                    }}
                                    onMouseOut={(e) => {
                                        timeoutRef.current = setTimeout((e) => {
                                            setPopuppopupCategoryActive(false)
                                        }, 500)
                                    }}
                                    className="menu__item"
                                    to="/catalog"
                                >
                                    Каталог
                                </Link>
                                <li className="menu__item">О Компнаии</li>
                                <li className="menu__item">Контакты</li>
                            </ul>
                        </div>
                        <div className="header__info info">
                            <a
                                href="mailto:mail@mail.ru"
                                className="info__link info__link_mail"
                            >
                                mail@mail.ru
                            </a>
                            <a
                                href="tel:+79999999999"
                                className="info__link info__link_mail"
                            >
                                +7(999)999-99-99
                            </a>
                        </div>
                        <button className="header__button button button_call">
                            Заказать звонок
                        </button>
                        <div
                            onClick={(e) => {
                                setPopupSearchActive((prev) => {
                                    return !prev
                                })
                            }}
                            className="header__search"
                        >
                            {popupSearchActive ? 'Поиск X' : 'Поиск >'}
                        </div>
                    </div>
                    <div
                        className={
                            popupCategoryActive
                                ? 'catalog-popup catalog-popup_active'
                                : 'catalog-popup'
                        }
                    >
                        <div className="catalog-popup__body _container">
                            <div className="catalog-popup__content">
                                <ul className="catalog-popup__list">
                                    {categorys.map((item) => (
                                        <Link
                                            to={`catalog/${item}`}
                                            key={item}
                                            className="catalog-popup__item"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            popupSearchActive
                                ? 'search-popup search-popup_active'
                                : 'search-popup'
                        }
                    >
                        <div className="search-popup__body">
                            <div className="search-popup__content">
                                <input
                                    className="search-popup__input"
                                    type="text"
                                    onChange={(e) => {
                                        setInputSearch(e.target.value)
                                    }}
                                />
                                <ul className="search-popup__list">
                                    {filterProduct.map((item) => {
                                        return (
                                            <li
                                                key={item.name}
                                                className="search-popup__item"
                                            >
                                                <img
                                                    src={item.imageURL}
                                                    alt={item.name}
                                                    className="search-popup__image"
                                                />
                                                <div className="search-popup__info">
                                                    <div className="search-popup__name">
                                                        {item.name}
                                                    </div>
                                                    <div className="search-popup__category">
                                                        {item.category}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderComponent
