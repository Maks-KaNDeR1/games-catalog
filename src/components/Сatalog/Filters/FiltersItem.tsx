import React, { useState } from "react"
import { FilterObjectType } from "../../../types/types"
import "./Filters.scss"


type PropsType = {
    title: string,
    arrayItem: FilterObjectType[],
    showState: boolean,
    setShowState: (showState: boolean) => void,
    handleChange: (e: string) => void
    amount?: number
}

const Item: React.FC<PropsType> = React.memo(({ title, arrayItem, showState, setShowState, handleChange, amount }) => {

    const mapArray = (i: FilterObjectType) => (
        <div key={i.value} >
            <input
                type="checkbox"
                className="custom-checkbox"
                id={i.value}
                checked={i.checked}
                onChange={() => handleChange(i.value)}
            />
            <label htmlFor={i.value}>{i.value.slice(0, -2)}</label>
        </div>
    )

    return (
        <div className='filters__item'>
            <h3 onClick={() => setShowState(!showState)}>{title}
                {showState
                    ? <i className="fa fa-angle-up" aria-hidden="true" />
                    : <i className="fa fa-angle-down" aria-hidden="true" />
                }
            </h3>

            <div className='filters__item__items'>
                {
                    showState &&
                    arrayItem.map((i) => mapArray(i))
                }
            </div>
        </div>
    )
})

export default Item