import React from 'react'
import b1 from '../reducers/bai1'
import { Selector, useSelector } from 'react-redux'
export default function Bai1() {
    const obj:any=useSelector((state)=>{
        console.log(state);
        return state
        
        
    })
  return (
    <div>
        <h3>Bai1</h3>
      <p>name :{obj.b1.name}</p>
      <p>id :{obj.b1.id}</p>
      <p>address : {obj.b1.address}</p>
      <p>date : {obj.b1.date}</p>
      <p>sex : {obj.b1.sex}</p>
    </div>
  )
}
