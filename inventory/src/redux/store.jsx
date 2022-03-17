import { createStore } from "redux";
import userReducer from "./reducer/userReducer";
import detailReducer from "./reducer/detailReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./rootReducer";

const store = createStore(rootReducer,composeWithDevTools())

export default store