import './App.css';
import MyContext from './MyContext';
import {useState} from 'react'
import ShowData from './ShowData';
import { v4 as uuidv4} from 'uuid'

function App() {
  const data = [{id: uuidv4(), name: 'Ilya'}, {id: uuidv4(), name: 'Nadya'}, {id: uuidv4(), name: 'Pasha'}]
  const [state, setState] = useState(data)

  const changeEl = (id) => {
    setState(state.map(user => user.id === id? {...user, name: `${user.name} ${user.id}`} : user))
  }

  const resetChanges = (id) => {
    setState(state.map(user => user.id === id? {...user, name: user.name}: user))
  }

  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={state}>
          <ShowData changeEl = {changeEl} resetChanges = {resetChanges}></ShowData>
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
