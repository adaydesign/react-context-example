## React Context Example

use in App

```
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
```

use in other component

--- value only

```
const [ value ] = useContext(MyContext)

return (
        <div>
            <p>Name : {value.number.name}</p>
            <p>Value : {value.number.value}</p>
        </div>
    )
```

--- dispatch only

```
const [_, dispatch] = useContext(myContext)

const decreaseValueHandle = () => {
    dispatch(decreaseValue(1))
}


..
..

<button onClick={decreaseValueHandle}>DECREASE -</button>
```

--- value and dispatch

```
const [ value, dispatch ] = useContext(MyContext)

const nameChangeHandle = (e) => {
    dispatch(changeName(e.target.value))
}

..
..

<tr>
    <td>name</td><td><input type="text" onChange={nameChangeHandle} value={value.number.name} /></td>
</tr>
```