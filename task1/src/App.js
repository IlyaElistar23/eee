import logo from './logo.svg';
import './App.css';
import ChangeUsers from './ChangeUsers';
import { Fragment, useRef, useState } from 'react'
import List from './List';
import AddName from './AddName';
import Names from './Names';


function App() {
  const [state, setState] = useState(['Lindsey', 'Mark', 'Tom', 'Ilya'])
  const addTop = (name) => {
    setState(state => [name, ...state])
  }
  const addBottom = (name) => {
    setState(state => [...state, name])
  }
  return (
      <div className="App">
        <Fragment>
          <Names names = {state}/>
          <AddName addTop = {addTop} addBottom = {addBottom}/>
        </Fragment>
      </div>
  );
}

export default App;