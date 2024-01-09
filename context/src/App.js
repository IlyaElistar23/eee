import './App.css';
import List from './List';
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ThemeContext from './ThemeContext';
import { LightTheme, DarkTheme } from './Themes';
import Wrapper from './Wrapper';

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

  const [theme, setTheme] = useState('light')

  const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <ThemeContext.Provider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Wrapper>
        <div className='App'>
          <List list={listState} setListState={setListState} />
          <input
            ref={inputRef}
            value={inputText}
            onKeyDown={(event) => event.key === 'Enter' && changeList()}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button onClick={() => setListState(list)}>Сбросить</button>
          <button onClick={() => inputRef.current.focus()}>Focus</button>
          <button onClick={themeToggler}>Переключить тему</button>
        </div>
      </Wrapper>
    </ThemeContext.Provider>

  );
}

export default App;