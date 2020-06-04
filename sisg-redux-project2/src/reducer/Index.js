import {combineReducers} from "redux";

/*
        FoodReducer :: vo
        RecipeReducer
        NewsReducer


        ==> 3개의 reducer를 뭉침 :: combineReduce
 */
import FoodReduce from "./FoodReduce";
export default combineReducers({
    foods:FoodReduce
})
// 데이터들이 foods에 모아져 있음
