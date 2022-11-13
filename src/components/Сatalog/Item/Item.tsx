import React, { useState } from 'react'
import { strFmt } from '../../../utils/formatСonversion'
import s from './Item.module.scss'

type PropsType = {
  title: string
  icon: string
  price: number
  bonuses: string | null
  min?: boolean
}

export const Item: React.FC<PropsType> = ({ title, icon, price, min, bonuses }) => {

  const [hover, setHover] = useState(false)

  const colorBonuses = {
    color: bonuses === 'Новинка' ? '#00FF66'
      : bonuses === 'Акция' ? '#00FFF0' : '#fff',
    padding: bonuses ? '2px 10px' : ''
  }

  return (
    <div
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={!min ? s.item : s.itemMin}
    >
      <span style={colorBonuses} className={s.item__bonuses}>{bonuses && bonuses}</span>
      <div className={s.item__background}> </div>
      <div className={!hover ? s.item__icon : s.item__iconHov}>
        <img src={icon} alt="" />
      </div>
      <div className={s.item__title}>
        <span >
          {title}
        </span>
        <div className={s.item__title__price}>
          {strFmt(price)} ₽
        </div>
      </div>
    </div>
  )
}