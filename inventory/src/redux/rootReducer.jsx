import { combineReducers } from "redux";
import userReducer from "./reducer/userReducer";
import detailReducer from "./reducer/detailReducer";

const rootReducer = combineReducers({
    user:userReducer,
    Details:detailReducer,
})

export default rootReducer