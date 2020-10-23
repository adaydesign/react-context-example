import { createContext } from 'react'

const defaultContextValue = {
    number: {
        name: "my number",
        value: 1
    }
}

const myReducer = (state, action) => {

    switch (action.type) {
        case "INC":
            return { ...state, number: { ...state.number, value: state.number.value + action.value } }
        case "DEC":
            return { ...state, number: { ...state.number, value: state.number.value - action.value } }
        case "RESET":
            return { ...state, number: { ...state.number, value: 0 } }
        case "NAME":
            return { ...state, number: { ...state.number, name: action.value } }
        case "VAL":
            return { ...state, number: { ...state.number, value: action.value } }
        default:
            return state;
    }

}

const increaseValue = (value) => {
    return { type: "INC", value: value }
}

const decreaseValue = (value) => {
    return { type: "DEC", value: value }
}

const resetValue = () => {
    return { type: "RESET"}
}

const changeName = (value) => {
    return { type: "NAME", value: value }
}

const changeValue = (value) => {
    return { type: "VAL", value: value }
}

const MyContext = createContext()

export default MyContext
export { defaultContextValue, myReducer, increaseValue, decreaseValue, changeName, changeValue, resetValue }