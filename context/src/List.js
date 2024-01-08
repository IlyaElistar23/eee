import { Fragment } from "react"
import React from "react"

const List = ({list, setListState}) => {
    
    const changeEl = (id) => {

        setListState(list.map(el => (el.id === id? {...el, title: `!!!${el.title}`} : el)))
        
    }

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