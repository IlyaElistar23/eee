import './App.css';
import List from './List';
import { useRef, useState,  } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const list = [
    { id: uuidv4(), title: 'React' },
    { id: uuidv4(), title: 'JavaScript' },
    { id: uuidv4(), title: 'HTML/CSS' }]

  const [listState, setListState] = useState(list)

  const [inputText, setInputText] = useState('')

  const inputRef = useRef(null)

  const changeList = () => {

    setListState([...listState, { id: uuidv4(), title: inputText }])

  }

  return (
    <div className='App'>
      <header className='App-header'>
        <List list={listState} setListState={setListState} />
        <input
          ref={inputRef}
          value={inputText}
          onKeyDown={(event) => event.key === 'Enter' && changeList()}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={() => setListState(list)}>Сбросить</button>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </header>

    </div>
  );
}

export default App;
