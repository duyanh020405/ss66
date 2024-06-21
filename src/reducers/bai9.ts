import { Bai9 } from "../interface";
const UserList: Bai9[] = [];
const b9 = (state = UserList, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default b9;
