// @ts-nocheck
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const reducers = combineReducers({
    Auth: authReducer
});

export default reducers;
