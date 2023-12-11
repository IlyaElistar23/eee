import logo from './logo.svg';
import './App.css';
import List from './List';
import {useRef, useState} from 'react'

function App() {
  const list = ['React', 'JavaScript', 'HTML/CSS'];
  const [listState, setListState] = useState(list)
  const [inputText, setInputText] = useState('')
  const changeList = () => {
    setListState([...listState, inputText])
    console.log(listState);
  }
  const inputRef = useRef(null)

  return (
    <div className="App">
      <header className="App-header">
        <List list = {listState}/>
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
