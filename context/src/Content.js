import List from './List';
import { useContext, useRef, useState,  } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components';
import ThemeContext from './ThemeContext';

const StyledContent = styled.div`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
padding-top: 1rem;
text-align: center;
min-height: 100vh;
`

const Content = () => {

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

  const theme = useContext(ThemeContext)

  return (
    <StyledContent theme={theme}>
        <List list={listState} setListState={setListState} />
        <input
          ref={inputRef}
          value={inputText}
          onKeyDown={(event) => event.key === 'Enter' && changeList()}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={() => setListState(list)}>Сбросить</button>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
    </StyledContent>
  )
}

export default Content;