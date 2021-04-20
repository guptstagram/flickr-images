import {combineReducers} from "redux";
import imageDataReducer from "./imageDataReducer";
import localStorageReducer from "./localStorageReducer";
import maximiseImageReducer from "./maximiseImageReducer.js"

const rootReducer = combineReducers({
    imageDataReducer,
    localStorageReducer,
    maximiseImageReducer,
})

export default rootReducer;