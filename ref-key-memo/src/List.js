import { Fragment, useEffect, useRef, useState } from "react"
import React from "react"

const List = ({list}) => {
    const [listState, setState] = useState(list)
    const changeEl = () => {
        setState(listState.map(el => `!!!${el}`))
    }
    
    return <ul>
        {listState.map(item => {
            return (
            <Fragment>
            <li key = {`${item}-item`}>
                {item}
                <button 
                    onClick={changeEl}>
                        Изменить элемент
                </button>
                </li>
            </Fragment>)
        })}
    </ul>
}

export default List;