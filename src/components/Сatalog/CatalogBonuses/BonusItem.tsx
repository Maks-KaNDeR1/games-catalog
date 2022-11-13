import React from 'react'
import s from './Bonuses.module.scss'

type PropsType = {
    icon: string
    title: string
}

export const Item: React.FC<PropsType> = ({ icon, title }) => {
    return (
        <div className={s.bonuses__item} >
            <img src={icon} alt="" />
            <div className={s.bonuses__item__title}>
                {title}
            </div>
        </div>
    )
}
