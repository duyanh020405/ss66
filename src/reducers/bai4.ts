// Đi khởi tạo state và hàm xử lý
const count:number=0

// Khởi tạo hàm xử lý
const b4=(state=count,action:any)=>{
    switch (action.type) {
        case "tang":
            return state+1
            break;
        case "giam":
            return state-1
        default:
            return state
    }

}
export default b4