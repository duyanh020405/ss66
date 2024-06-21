import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import b6 from '../reducers/bai6'
export default function Bai6() {
    const bai6=useSelector((state)=>{
        return state
    })
    const dispath=useDispatch()
    const b6=()=>{
        dispath({
            type:"value"
        })
        

    }

  return (
    <div>
        <h2>Bai 6</h2>
        <p>{bai6.b6}</p>
        <button onClick={b6}>Change</button>
      
    </div>
  )
}
