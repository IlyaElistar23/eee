import { Fragment, useState } from "react"
import React from "react"

const List = ({list}) => {

    const [listState, setState] = useState(list)

    const changeEl = (id) => {
        // return list.id ? setState({...list, title: `!!!${list.title}`}) : list.title
        setState(listState.map(el => (el.id === id? {...el, title: `!!!${el.title}`} : el)))
        console.log(id, listState);
    }
    
    return <ul>
        {listState.map(item => {
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