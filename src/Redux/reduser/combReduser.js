import { combineReducers } from "redux";
import ArrReduser from "./ArrReduser";
import UserReduser from "./UserReduser";

const combReduser = combineReducers({
       main:UserReduser,
       arruser:ArrReduser
});

export default combReduser