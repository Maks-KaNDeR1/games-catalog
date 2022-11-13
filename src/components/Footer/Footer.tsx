import React, { useEffect, useState } from 'react'
import { matchMedia } from '../../utils/matchMedia'
import s from './Footer.module.scss'

type PropsType = {

}

export const Footer: React.FC<PropsType> = () => {


    const [showBuyers, setShowBuyers] = useState(false)
    const [showPartners, setShowPartners] = useState(false)
    const [showCompany, setShowCompany] = useState(false)
    const [showSocial, setShowSocial] = useState(false)

    return (
        <footer className={s.footer}>
            <hr className={s.footer__partition} />

            {
                matchMedia(768) ?
                    <div className={s.footer__content} >
                        <div className={s.footer__bottom}>
                            <span>© 2021 Turbinary</span>
                            <span>Дизайн в ADN Digital Studio</span>
                        </div>
                    </div>
                    :
                    <div className={s.footer__content} >
                        <div className={s.footer__items}>
                            <div className={s.footer__items__links}>
                                <span>О компании</span>
                                <span>Новости и статьи</span>
                                <span>Акции</span>
                            </div>
                            <div className={s.footer__items__links}>
                                <span>Часто задаваемые вопросы</span>
                                <span>Условия возраста</span>
                                <span>Правовая информация</span>
                            </div>
                            <div className={s.footer__items__links}>
                                <span>+7 (495) 727-01-81</span>
                                <span>care@turbistore.ru</span>
                            </div>
                        </div>
                        <div className={s.footer__bottom}>
                            <span>© 2021 Turbinary</span>
                            <span>Дизайн в ADN Digital Studio</span>
                        </div>
                    </div>
            }
        </footer>
    )
}
