import React from 'react'
import s from './Bonuses.module.scss'
import { Item } from './BonusItem'
import regularPromotions from '../../../assets/svg/regularPromotions.svg'
import licenseKeys from '../../../assets/svg/licenseKeys.svg'
import technicalSupport from '../../../assets/svg/technicalSupport.svg'
import instantKeyAcquisition from '../../../assets/svg/instantKeyAcquisition.svg'


export const Bonuses: React.FC = () => {
    return (
        <div className={s.bonuses} >
            <Item icon={regularPromotions} title='Регулярные акции, скидки и бонусы' />
            <Item icon={licenseKeys} title='Лицензионные ключи от официальных издателей' />
            <Item icon={technicalSupport} title='Гарантированная техподдержка вашей покупки' />
            <Item icon={instantKeyAcquisition} title='Мгновенное получение ключа на почту и в личный кабинет' />
        </div>
    )
}
