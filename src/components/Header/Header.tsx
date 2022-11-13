import React, { useState, useEffect, FormEvent, ChangeEvent, KeyboardEvent } from 'react'
import s from './Header.module.scss'
import basket from '../../assets/svg/basket.svg'
import favorites from '../../assets/svg/favorites.svg'
import profile from '../../assets/svg/profile.svg'
import burgerMenu from '../../assets/svg/burger-menu.svg'
import logo from '../../assets/svg/logo.svg'
import search from '../../assets/svg/search.svg'
import { matchMedia } from '../../utils/matchMedia'
import { ItemType } from '../../types/types'
import { items } from '../../server/items'

type PropsType = {
    setItemsArray: (value: ItemType[]) => void
}

export const Header: React.FC<PropsType> = ({ setItemsArray }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchInput, setShowSearchInput] = useState(false)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            handleClick()
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        const results = items?.map(i => i.title).filter(person =>
            person.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const filtered = items.filter(({ title }) => results.includes(title))

        setItemsArray(filtered)
        setShowSearchInput(false)
    }

    return (
        <header>
            {
                !matchMedia(768) ?
                    <div className={s.header}>
                        <div className={s.header__logo}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={s.header__searchBlock}>
                            <button className={s.header__buttonSearch}>
                                КАТАЛОГ
                            </button>
                            <input
                                value={searchTerm}
                                type="search"
                                autoFocus
                                className={s.header__input}
                                onChange={handleChange}
                                onKeyPress={onKeyPressHandler}
                            />
                            <div className={s.header__iconSearch}>
                                <img onClick={handleClick} src={search} alt="" />
                            </div>
                        </div>
                        <div className={s.header__icons} >
                            <div className={s.header__icons__icon}>
                                <img src={profile} alt="" />
                            </div>
                            <div className={s.header__icons__icon}>
                                <img src={favorites} alt="" />
                            </div>
                            <div className={s.header__icons__icon}>
                                <img src={basket} alt="" />
                            </div>
                        </div>
                    </div>
                    :
                    <div className={s.header}>
                        <div className={s.header__logo}>
                            <img src={logo} alt="" />
                        </div>
                        {
                            showSearchInput && <div className={s.header__searchBlock}>
                                <input
                                    className={s.header__input}
                                    type="search"
                                    autoFocus
                                    value={searchTerm}
                                    onChange={handleChange}
                                    onKeyPress={onKeyPressHandler}
                                />
                                <div className={s.header__iconSearch}>
                                    <img onClick={handleClick} src={search} alt="" />
                                </div>
                            </div>
                        }
                        <div className={s.header__icons} >
                            {
                                !showSearchInput && <div onClick={() => setShowSearchInput(true)} className={s.header__icons__icon}>
                                    <img src={search} alt="" />
                                </div>
                            }
                            <div className={s.header__icons__icon}>
                                <img src={basket} alt="" />
                            </div>
                            <div className={s.header__icons__icon}>
                                <img src={burgerMenu} alt="" />
                            </div>
                        </div>
                    </div>
            }
        </header>
    )
}
