import { Fragment, useState } from "react"
import React from "react"

const List = ({list, changeEl}) => {
    
    return <ul>
        {list.map(item => {
            return (
            <Fragment>
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => changeEl(item.id)}>
                        Изменить элемент
                    </button>
                </li>
            </Fragment>)
        })}
    </ul>
}

export default List;