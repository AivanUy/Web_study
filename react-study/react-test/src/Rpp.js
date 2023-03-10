import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
    let newstate = { ...prevState }
    switch (action.type) {
        case "aivan-minus":
            newstate.count--
            return newstate
        case "aivan-plus":
            newstate.count < 0 ? newstate.count = 1 : newstate.count++
            return newstate
        default:
            return prevState
    }
}

const initialState = {
    count: 0
}


export default function Rpp() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button style={{ marginRight: 10 }} onClick={() => {
                dispatch({
                    type: "aivan-minus"
                })
            }}>-</button>
            <span>{state.count >= 0 ? state.count : 0}</span>
            <button style={{ marginLeft: 10 }} onClick={() => {
                dispatch({
                    type: "aivan-plus"
                })
            }}>+</button>
            {state.count < 0 && <div style={{ color: 'red', marginTop: 5 }}>不支持负数 {state.count}</div>}
        </div>
    )
}
