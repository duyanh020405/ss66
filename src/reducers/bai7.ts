const bai7:string="light"
const b7=(state=bai7,action:any)=>{
    switch (action.type) {
        case "bai7":
            return state === "light" ? "dark" : "light";
    
        default:
            return state  
    }
}
export default b7