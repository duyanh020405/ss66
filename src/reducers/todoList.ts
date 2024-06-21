import { Job } from "../interface";
const initalJob: Job[]=[
    {
        id:1,
        name:"hoc redux",
        status:false,
    },
    {
        id:2,
        name:"hoc redux 2",
        status:false
    },
    {
        id:3,
        name:"hoc redux 3",
        status:false
    }
]
const jobReuducer=(state=initalJob, action:any)=>{
    switch (action.type) {
        case "add":
            return [...state]
        case "delete":
            return [...state]
        case "update":
            return [...state]
        default:
            return [...state]
    }

} 
export default jobReuducer