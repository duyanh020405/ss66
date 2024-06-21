// Đi khởi tạo state và hàm xử lý
const count:number=0

// Khởi tạo hàm xử lý
const countReducers=(state=count,action:any)=>{
    switch (action.type) {
        case "INCREASE":
            return state+1
            break;
        case "DECREASE":
            return state-1
        default:
            return state
    }

}
export default countReducers