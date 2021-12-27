import { combineReducers } from "redux";
import { statesReducer } from './statesReducer'
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    states: statesReducer,
    auth: authReducer
});