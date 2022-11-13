import React, { useState, useCallback } from 'react'
// import Slider from 'rc-slider'
import "./Filters.scss"
import 'rc-slider/assets/index.css';
import Item from './FiltersItem';
import Slider from 'rc-slider';
import { numbFmt, strFmt } from '../../../utils/formatСonversion';
import { FilterObjectType } from '../../../types/types';
import windowClose from '../../../assets/svg/window-close.svg'
import { matchMedia } from '../../../utils/matchMedia';

type PropsType = {
    setShowfilters?: (value: boolean) => void
    // minPrice: number
    // maxPrice: number
    // Developer: string[]
    // Platforms: string[]
    // Genre: string[]
}


export const Filters: React.FC<PropsType> = React.memo(({ setShowfilters }) => {

    const arrayObject = (array: string[]) => array.map((value, i) => ({ value: value + '-' + i, checked: false }))

    const genre = ['Экшн', 'Приключения', 'Инди', 'Карточная игра', 'Ролевая', 'Стратегия', 'Открытый мир', 'Казуальная', 'Ролевая', 'Стратегия', 'Открытый мир', 'Ролевая']
    const platforms = ['XBOX', 'PSN', 'NINTENDO']
    const activation = ['890', '78', 'ghj', '45']
    const developer = ['gj', 'ghjgh', '768', '78']
    const publisher = ['07th Expansion', '505 Games', '505 Games, All In! Games', 'Alawar Entertainment', 'BANDAI NAMCO Entertainment',
        'Capcom', 'Electronic Arts', 'Dungeon Crawler', 'XS / Mobile'] // search 
    const peculiarities = ['760', '768', '8р0']
    const productType = ['650', '70', 'ап80']

    const [genreValue, setGenreValue] = useState(arrayObject(genre))
    const [platformsValue, setPlatformsValue] = useState(arrayObject(platforms))
    const [activationValue, setActivationValue] = useState(arrayObject(activation))
    const [developerValue, setDeveloperValue] = useState(arrayObject(developer))
    const [publisherValue, setPublisherValue] = useState(arrayObject(publisher))
    const [peculiaritiesValue, setPeculiaritiesValue] = useState(arrayObject(peculiarities))
    const [productTypeValue, setProductTypeValue] = useState(arrayObject(productType))

    const [minPrice, setMinPrice] = useState(strFmt(0))
    const [maxPrice, setMaxPrice] = useState(strFmt(10500))

    const [popularity, setPopularity] = useState(false)
    const [showPrice, setShowPrice] = useState(true)
    const [showGenre, setShowGenre] = useState(false)
    const [showPlatforms, setShowPlatforms] = useState(false)
    const [showActivation, setShowActivation] = useState(false)
    const [showDeveloper, setShowDeveloper] = useState(false)
    const [showPublisher, setShowPublisher] = useState(true)
    const [showPeculiarities, setShowPeculiarities] = useState(false)
    const [showProductType, setShowProductType] = useState(false)

    const handleRangeChange = (value: number | number[]) => {
        setMinPrice(strFmt(value[0]))
        setMaxPrice(strFmt(value[1]))
    }

    const handleChange = (
        name: string,
        Obj: FilterObjectType[],
        setObject: (Obj: FilterObjectType[]) => void,
    ) => {
        const newObj = Obj.map(o => o.value === name ?
            { ...o, checked: !o.checked } : o)
        setObject(newObj)
    }

    const handleGenreChange = (name: string) => handleChange(name, genreValue, setGenreValue)
    const handlePlatformsChange = (name: string) => handleChange(name, platformsValue, setPlatformsValue)
    const handleActivationChange = (name: string) => handleChange(name, activationValue, setActivationValue)
    const handleDeveloperChange = (name: string) => handleChange(name, developerValue, setDeveloperValue)
    const handlePublisherChange = (name: string) => handleChange(name, publisherValue, setPublisherValue)
    const handlePeculiaritiesChange = (name: string) => handleChange(name, peculiaritiesValue, setPeculiaritiesValue)
    const handleProductTypeChange = (name: string) => handleChange(name, productTypeValue, setProductTypeValue)


    const handleReset = () => {
        setMinPrice(strFmt(0))
        setMaxPrice(strFmt(10500))
        setGenreValue(arrayObject(genre))
        setPlatformsValue(arrayObject(platforms))
        setActivationValue(arrayObject(activation))
        setDeveloperValue(arrayObject(developer))
        setPublisherValue(arrayObject(publisher))
        setPeculiaritiesValue(arrayObject(peculiarities))
        setProductTypeValue(arrayObject(productType))
    }


    return (
        <div className='filters' >
            {
                matchMedia(768) &&
                <div className='filters__hide'
                    onClick={() => setShowfilters && setShowfilters(false)}
                >
                    <img src={windowClose} alt="" />
                    <span>Скрыть фильтр</span>
                </div>
            }
            <div className='filters__price' >
                <h2 onClick={() => setPopularity(!popularity)}> По популярности
                    {popularity
                        ? <i className="fa fa-angle-up" aria-hidden="true" />
                        : <i className="fa fa-angle-down" aria-hidden="true" />
                    }
                </h2>
                <h2 onClick={() => setShowPrice(!showPrice)} >Цена, ₽ </h2>
                {
                    showPrice && <div>
                        <div className='filters__price__input' >
                            <span>
                                <span>от</span>
                                <input value={minPrice} readOnly />
                            </span>
                            <span>
                                <span> до</span>
                                <input value={maxPrice} readOnly />
                            </span>
                        </div>
                        <div className='filters__price__slider'>
                            <Slider
                                min={0}
                                max={10500}
                                range
                                value={[numbFmt(minPrice), numbFmt(maxPrice)]}
                                onChange={handleRangeChange}
                                trackStyle={{ backgroundColor: '#FF5C00' }}
                                handleStyle={{ backgroundColor: '#000', border: '1px solid #FF5C00', boxShadow: 'none' }}
                            />
                        </div>
                    </div>
                }
            </div>

            <Item
                title='Жанр'
                arrayItem={genreValue}
                showState={showGenre}
                setShowState={setShowGenre}
                handleChange={(value: string) => handleGenreChange(value)}
            />
            <Item
                title='Платформы'
                arrayItem={platformsValue}
                showState={showPlatforms}
                setShowState={setShowPlatforms}
                handleChange={(value: string) => handlePlatformsChange(value)}
            />
            <Item
                title='Активация'
                arrayItem={activationValue}
                showState={showActivation}
                setShowState={setShowActivation}
                handleChange={(value: string) => handleActivationChange(value)}
            />
            <Item
                title='Разработчик'
                arrayItem={developerValue}
                showState={showDeveloper}
                setShowState={setShowDeveloper}
                handleChange={(value: string) => handleDeveloperChange(value)}
            />
            <Item
                title='Издатель'
                arrayItem={publisherValue}
                showState={showPublisher}
                setShowState={setShowPublisher}
                handleChange={(value: string) => handlePublisherChange(value)}
            />
            <Item
                title='Особенности'
                arrayItem={peculiaritiesValue}
                showState={showPeculiarities}
                setShowState={setShowPeculiarities}
                handleChange={(value: string) => handlePeculiaritiesChange(value)}
            />
            <Item
                title='Тип товара'
                arrayItem={productTypeValue}
                showState={showProductType}
                setShowState={setShowProductType}
                handleChange={(value: string) => handleProductTypeChange(value)}
            />
            <div className='filters__buttons'>
                <button
                    onClick={() => setShowfilters && setShowfilters(false)}
                    className='filters__buttons__apply'
                >ПРИМЕНИТЬ</button>
                <button onClick={handleReset} >Сбросить фильтр</button>
            </div>
        </div>
    )
})

