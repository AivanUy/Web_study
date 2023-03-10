import React, { useEffect, useState } from 'react'

export default function Fpp() {
    const [list, setList] = useState([])
    console.log("function start", list)
    useEffect(() => {
        console.log("useEffect")
        setList([0,1,2,3,4,5,6,7,8,9,10])
    }, [])

    return (
        <div>
            Test Function
            <div style={{ background: "yellow", width: "20" }} onClick={() => {
                setList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            }}>Add</div>
            <ul>
                {
                    list.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
