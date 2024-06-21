import { Bai3 } from "../interface";
const bai3:Bai3[]=[
    {
        name:"Cam sanh",
        id:1,
        price:10000,
        quantity:10
    },
    {
        name:"Buoi nam roi",
        id:2,
        price:20000,
        quantity:20
    }
]
const b3=(state=bai3,action:any)=>{
    switch (action.type) {
        case "hi": return state
    
        default:
            return state
    }
}
export default b3