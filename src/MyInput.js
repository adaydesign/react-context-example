import React, { useContext } from 'react'
import MyContext, {changeName, changeValue} from './myContext'

const MyInput = () => {

    const [ value, dispatch ] = useContext(MyContext)

    const nameChangeHandle = (e) => {
        dispatch(changeName(e.target.value))
    }

    const valueChangeHandle = (e) => {
        dispatch(changeValue(e.target.value))
    }

    return (<>
        <table>
            <tr>
                <td>name</td><td><input type="text" onChange={nameChangeHandle} value={value.number.name} /></td>
            </tr>
            <tr>
                <td>value</td><td><input type="text" onChange={valueChangeHandle} value={value.number.value} /></td>
            </tr>
        </table>

    </>)
}

export default MyInput