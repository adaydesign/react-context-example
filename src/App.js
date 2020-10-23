import React, {useReducer} from 'react';
import './App.css';
import MyForm from './MyForm'
import MyInput from './MyInput'
import MyControl from './MyControl'
import MyContext, { defaultContextValue,myReducer } from './myContext'

function App() {

  const [value, dispatch] = useReducer(myReducer, defaultContextValue)

  return (
    <MyContext.Provider value={[value, dispatch]}>
      <MyForm />
      <MyInput />
      <MyControl />
    </MyContext.Provider>
  );
}

export default App;
