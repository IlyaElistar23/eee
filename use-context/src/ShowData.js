import MyContext from "./MyContext";
import {useContext, Fragment} from 'react'

const ShowData = ({changeEl, resetChanges}) => {
    const data = useContext(MyContext)
    return (
    <ul>
        {data.map(user => {
            return (
            <Fragment>
                <li>
                    {user.name}
                </li>
                <button onClick={() => changeEl(user.id)}>
                    Изменить элемент
                </button>
                <button onClick={() => resetChanges(user.id)}>
                    Сбросить
                </button>
            </Fragment>
            )
        })}
    </ul>
    )
}

export default ShowData; 