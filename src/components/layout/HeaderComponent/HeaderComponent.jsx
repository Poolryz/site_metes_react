import { Link } from 'react-router-dom'
import LOGO from '../../../assets/images/logo/LOGO.svg'

function HeaderComponent() {
    return (
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
                    <div className="header__search">Поиск</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent
