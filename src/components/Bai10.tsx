import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Bai10() {
    const location=useLocation()

    
  return (
    <div>
        <h2>Bai 10</h2>
        <h5>Dang nHAP</h5>
        <form>
            <input value={location.state.email} placeholder='email' type="text" name='email' />
            <input value={location.state.pass} placeholder='password' type="text" name='password' />
            <input value={location.state.checked} placeholder='password_check' name='password_check' type="text" />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
