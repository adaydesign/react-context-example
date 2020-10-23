import React, { useContext } from 'react'
import MyContext from './myContext'

const MyForm = () => {
    const [ value ] = useContext(MyContext)
    return (
        <div>
            <p>Name : {value.number.name}</p>
            <p>Value : {value.number.value}</p>
        </div>
    )
}

export default MyForm