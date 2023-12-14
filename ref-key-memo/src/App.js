// import logo from './logo.svg';
import './App.css';
import List from './List';
import {useRef, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const list = [
    {id: uuidv4(), title: 'React'},
    {id: uuidv4(), title:'JavaScript'},
    {id: uuidv4(), title:'HTML/CSS'}]
  
  const [listState, setListState] = useState(list)

  const [inputText, setInputText] = useState('')

  const inputRef = useRef(null)
  
  const changeList = () => {

    setListState([...list, {id: uuidv4(), title: inputText}]) 
     console.log(list)

  }
  const changeEl = (id) => {
    // return list.id ? setState({...list, title: `!!!${list.title}`}) : list.title
    setListState(listState.map(el => (el.id === id? {...el, title: `!!!${el.title}`} : el)))
    // console.log(id, listState);
}
 
  return (
    <div className="App">
      <header className="App-header">
        <List list = {listState} changeEl = {changeEl}/>
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
