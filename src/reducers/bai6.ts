const bai6:string="Rikkei Academy"
const b6=(state=bai6,action:any)=>{
    switch (action.type) {
        case "value":
            return state === "Rikkei Academy" ? "Rikkei Shop" : "Rikkei Academy";
    
        default:
            return state  
    }
}
export default b6