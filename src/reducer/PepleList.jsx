import { useReducer } from "react";
import { v4 as id } from 'uuid';

const initialState = [

]
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            if(action.payload.name){
                return state = [...state ,{id: id(), name: action.payload.name}]}
            break
        case'DEL':
                if(action.payload.id){
                    return state = state.filter(item => item.id !== action.payload.id)
                }
                break;
        case'ORDER':
                let newState = [...state]
                newState = newState.sort((n1, n2) => (n1.name > n2.name) ? 1 : -1)
                return newState
        default:
            return state
    }
}

export default function usePeapleList() {
    return useReducer(reducer, initialState)
}