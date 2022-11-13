import React, { useState } from 'react'
import Paginator from '../../common/Paginator/Paginator'
import { Bonuses } from './CatalogBonuses/Bonuses'
import { Filters } from './Filters/Filters'
import { Item } from './Item/Item'
import { items } from '../../server/items'
import s from './Сatalog.module.scss'
import { СatalogFooter } from './СatalogFooter/СatalogFooter'
import { matchMedia } from '../../utils/matchMedia'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { ItemType } from '../../types/types'
import bug from '../../assets/svg/bug.svg'

type PropsType = {
    itemsArray: ItemType[]
}


export const Сatalog: React.FC<PropsType> = ({ itemsArray }) => {

    const [pageSize,] = useState(51)
    const [totalUsersCount,] = useState(500)
    const [currentPage, setCurrentPage] = useState(23)

    const [showfilters, setShowfilters] = useState(false)

    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    const ref = useRef(null)

    const handleClickOutside = () => setShowfilters(false)

    useOnClickOutside(ref, handleClickOutside)

    const handleClick = () => setShowfilters(state => !state)


    const catalogModalStyle = {
        // position: 'relative',
        background: showfilters ? 'black' : '',
        opacity: showfilters ? '0.2' : '',
        zIndex: '-100',
    }


    return (
        <div className={s.catalog}>
            <div className={s.catalog__header}>
                <div className={s.catalog__header__icon}>
                    Главная страница
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    Каталог
                </div>
                <div className={s.catalog__header__title}> Каталог<span  >876</span></div>
                {
                    matchMedia(768) && <button
                        ref={ref}
                        onClick={handleClick}
                        className={s.catalog__header__button}
                    >ПОКАЗАТЬ ФИЛЬТРЫ
                    </button>
                }
            </div>

            <div className={s.catalog__content}>
                {
                    matchMedia(768) ? showfilters && <div
                        ref={ref}
                        className={s.catalog__content__filters} >
                        <Filters setShowfilters={setShowfilters} />
                    </div>
                        : <Filters />
                }
                <div className={s.catalog__content__itemsBlock}>
                    {
                        itemsArray.length >= 1
                            ?
                            <div className={s.catalog__items}>
                                {itemsArray.map((i, indx) => <Item
                                    key={i + '-' + indx}
                                    title={i.title}
                                    icon={i.icon}
                                    price={i.price}
                                    bonuses={i.bonuses}
                                />)}
                            </div>
                            :
                            <div className={s.catalog__noresults} >
                                <div className={s.catalog__noresults__bug}>
                                    <span><img src={bug} alt="" /></span>
                                    <h1>Нет результатов</h1>
                                    <span>К сожалению, по вашему запросу нет результатов.</span>
                                </div>
                                <h2>Новинки в Turbinary</h2>
                                <div className={s.catalog__items}>
                                    {
                                        items.filter(i => i.bonuses === 'Новинка').
                                            map((i, indx) => <Item
                                                key={i + '-' + indx}
                                                title={i.title}
                                                icon={i.icon}
                                                price={i.price}
                                                bonuses={i.bonuses}
                                            />)
                                    }
                                </div>
                            </div>
                    }
                    <div className={s.catalog__paginator}>
                        <Paginator
                            pageSize={pageSize}
                            totalItemsCount={totalUsersCount}
                            onPageChanged={onPageChanged}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div >
            <div className={s.catalog__footer}>
                <СatalogFooter />
            </div>
            <div className={s.catalog__bonuses}>
                <Bonuses />
            </div>
        </div >
    )
}
