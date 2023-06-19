import { createStore,combineReducers } from "redux";
import {reducer,updates} from "./reducer";
const reducers=combineReducers({
    reducer,updates
})
const store=createStore(reducers)

export default store