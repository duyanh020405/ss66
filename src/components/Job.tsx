import jobReuducer from '../reducers/todoList';
import { UseSelector, useDispatch, useSelector } from 'react-redux'
export default function Job() {
    const arr:any= useSelector((state)=>{
        return state

    })
  return (
    <div>
      <h2>Job</h2>
      {
        arr.jobReuducer.map((item:any)=>{
            return <div>
                <p>name : {item.name}</p>
                <p>id: {item.id}</p>
                <p>item : false</p>
            </div>


        })
      }
    </div>
  )
}
