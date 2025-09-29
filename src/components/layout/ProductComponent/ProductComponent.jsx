import './ProductComponent.scss'
function ProductComponent({ product }) {
    return (
        <div className="product-component">
            <div className="product-component__body _container">
                <div className="product-component__content">
                    <div className="product-component__image">
                        <img
                            src={product.imageURL}
                            alt={product.name}
                            className="product-component__img"
                        />
                    </div>
                    <div className="product-component__info">
                        <h1 className="product-component__title">
                            {product.name}
                        </h1>
                        <div className="product-component__category">
                            Категория: <span>{product.category}</span>
                        </div>
                        <div className="product-component__params">
                            <h3 className="product-component__params-title">
                                Характеристики
                            </h3>
                            <div className="product-component__params-list">
                                {Object.entries(product)
                                    .filter(
                                        ([key]) =>
                                            ![
                                                'id',
                                                'name',
                                                'category',
                                                'imageURL',
                                            ].includes(key)
                                    )
                                    .map(([param, value]) => (
                                        <div
                                            key={param}
                                            className="product-component__param"
                                        >
                                            <span className="product-component__param-name">
                                                {getParamName(param)}:
                                            </span>
                                            <span className="product-component__param-value">
                                                {Array.isArray(value)
                                                    ? value.join(', ')
                                                    : value}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <button className="product-component__button button button_green">
                            Узнать цену
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Вспомогательная функция для форматирования названий параметров
function getParamName(param) {
    const paramNames = {
        profile_grade: 'Марка профиля',
        profile_height: 'Высота профиля',
        base_thickness: 'Толщина основы',
        sheet_length: 'Длина листа',
        overall_sheet_width: 'Общая ширина листа',
        useful_sheet_width: 'Полезная ширина листа',
        tape_thickness: 'Толщина ленты',
        tape_width: 'Ширина ленты',
        strip_width: 'Ширина полосы',
        inner_diameter: 'Внутренний диаметр',
        wave_pitch: 'Шаг волны',
        protection_class: 'Класс защиты',
        installation_temperature: 'Температура монтажа',
        operating_temperature: 'Рабочая температура',
        impact_strength: 'Ударная прочность',
        dielectric_strength: 'Диэлектрическая прочность',
        insulation_resistance: 'Сопротивление изоляции',
        zinc_front: 'Цинк лицевая сторона',
        zinc_back: 'Цинк обратная сторона',
        product_thickness: 'Толщина изделия',
        polymer_thickness: 'Толщина полимера',
        primer: 'Грунтовка',
        product_width: 'Ширина изделия',
        strength: 'Прочность',
    }

    return paramNames[param] || param
}

export default ProductComponent
