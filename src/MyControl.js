import React, { useContext } from 'react'
import myContext, {increaseValue, decreaseValue, resetValue} from './myContext'

const MyControl = () => {

    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useContext(myContext)

    const decreaseValueHandle = () => {
        dispatch(decreaseValue(1))
    }

    const increaseValueHandle = () => {
        dispatch(increaseValue(1))
    }

    const resetValueHandle = () => {
        dispatch(resetValue(0))
    }
    
    return (<div>
        <button onClick={decreaseValueHandle}>DECREASE -</button>
        <button onClick={resetValueHandle}>RESET</button>
        <button onClick={increaseValueHandle}>INCREASE +</button>
        </div>)
}

export default MyControl