import {useReducer} from 'react'

const initialState = []

function reducer(state, action) {
    switch (action.type) {
        case 'ADDUSER':
            return state = [...state, action.payload]
        case 'DELLUSER':
            return state = state.filter(user => user.name !== action.payload.name)
        default:
            return state;
    }
}

export default function Users() {
    return useReducer(reducer, initialState)
}