import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import b4 from '../reducers/bai4'

export default function Bai4() {
    const Count=useSelector((state:any)=>{
        return state
    })
    const dispath = useDispatch()
    const tang = ()=>{
        dispath({
            type:"tang"
        })
    }
    const giam = ()=>{
        dispath({
            type:"giam"
        })
    }
  return (
    <div>
        <h2>Bai 4</h2>
        <p>Count :{Count.b4}</p>
        <button onClick={tang}>Tang</button>
        <button onClick={giam}>Giam</button>
    </div>
  )
}
