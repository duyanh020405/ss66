import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import jobReuducer from '../reducers/todoList';
export default function Count() {
    const countState:any = useSelector((state)=>{
        return state
    })
    const dispath=useDispatch()
    const tang =()=>{
        dispath({
            type:"INCREASE"
        })

    }
    const giam =()=>{
        dispath({
            type:"DECREASE"
        })

    }
    
    
  return (
    <div>
      <p>Bien count :{countState.countReducers}</p>
      <button onClick={tang}>Tang</button>
      <button onClick={giam}>Giam</button>
    </div>
  )
}
