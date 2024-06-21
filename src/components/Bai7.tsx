import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/Bai7.css'
export default function Bai7() {
    const bai7=useSelector((state)=>{
        return state
    })
    const dispath=useDispatch()
    const check=()=>{
        dispath({
            type:"bai7"
        })
    }
  return (

    <div> 
        <h2>Bai 7</h2>
        <div className={`${bai7.b7}`} style={{position:"relative",width:200,height:100,}}>
       
        <input type="checkbox" onClick={check} />
    </div>
    </div>
  )
}
