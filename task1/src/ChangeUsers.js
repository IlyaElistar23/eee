import { useState } from "react";

const ChangeUsers = ({list}) => {
    const [users, setUser] = useState(list)
    const [text, setText] = useState('')
    const changeInput = (event) => {
        setText(event.target.value)
    }
    const addUser = () => {
        setUser([...users, {name: text, id: users.length}])
    }
    return (
        <div>
            <input type="text" value={text} onChange={changeInput}/>
            <button onClick={addUser}>Добавить</button>
            <ul>
                {users.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default ChangeUsers;