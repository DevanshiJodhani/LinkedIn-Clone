import { combineReducers } from "redux";
// import  useReducer  from "./useReducer";
import useReducer from "./useReducers";
import ArticleReducer from "./ArticleReducers";


const rootReducer = combineReducers({
    userState:  useReducer,
    articleState: ArticleReducer,


});


export default rootReducer;