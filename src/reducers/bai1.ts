interface User{
    id:number,
    name:string,
    sex:string,
    date:string,
    address:string
}
const bai1:User={
    name:"Duy Anh",
    id:1,
    sex:"Male",
    date:"02/04/2005",
    address:"Thai Binh"
}
const b1=(state=bai1,action:any)=>{
    switch (action.type) {
        case "hi":
            return state
        default:
            return state
    }
}
export default b1

