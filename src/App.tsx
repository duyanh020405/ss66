import { Routes , Route, Outlet } from 'react-router-dom'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Count from './components/Count'
import Job from './components/Job'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
import Bai7 from './components/Bai7'
import Bai9 from './components/Bai9'
import Bai10 from './components/Bai10'
export default function App() {
  return (
    <div>
      <Count></Count>
      <Job></Job>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Outlet></Outlet>
      
      <Routes>
        <Route path='/' element={<Bai9></Bai9>}></Route>
        <Route path='/login' element={<Bai10></Bai10>} ></Route>
      </Routes>
    
    </div>
  )
}
