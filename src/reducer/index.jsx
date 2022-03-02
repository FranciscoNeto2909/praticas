import { useReducer } from "react"
const initialState = {count: 0}

const Reducer = (state, action) => {
    switch (action.type) {
        case "SOMAR":
            return {count: state.count + 1}
        case "SUBTRAIR":
            return {count: state.count - 1}
        default:
            return state
    }    
}
export default function CountReducer(){
    return useReducer(Reducer, initialState)
}