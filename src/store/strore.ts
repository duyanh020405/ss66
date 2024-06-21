import {combineReducers, createStore} from "redux"
import countReducers  from "../reducers/countReducer"
import jobReuducer from "../reducers/todoList"
import b1 from "../reducers/bai1"
import b3 from "../reducers/bai3"
import b4 from "../reducers/bai4"
import b5 from "../reducers/bai5"
import b6 from "../reducers/bai6"
import b7 from "../reducers/bai7"
import b9 from "../reducers/bai9"
const rootEducer =combineReducers({countReducers,jobReuducer,b1,b3,b4,b5,b6,b7,b9})
const store=createStore(rootEducer)
export default store