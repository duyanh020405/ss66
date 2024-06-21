import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bai9 } from '../interface'
import { useNavigate } from 'react-router-dom'
export default function Bai9() {
    const [user, setUser]=useState<Bai9>({
        email:'',
        pass:'',
        checked:''
    })
    const navigate=useNavigate();
    const arr:any=useSelector((state)=>{
        return state
    })
    const dispath=useDispatch()
    const add=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispath({
            type:"add",payload:user
        })

        navigate('/login', {state: user})
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        const newUser = {
            ...user,[name]: value
        }
        setUser(newUser)
        
    }
    
  return (
    <div >
        <h2>Bai 9</h2>
        <h5>Dang ky</h5>
        <form onSubmit={add}>
            <input onChange={handleChange} placeholder='email' type="text" name='email' />
            <input onChange={handleChange} placeholder='password' type="text" name='pass' />
            <input onChange={handleChange} placeholder='password_check' name='checked' type="text" />
            <button type='submit'>Add</button>
        </form>
  
  
    
      
    </div>
  )
}
