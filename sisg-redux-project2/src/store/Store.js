import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
// thunk :: 비동기화 프로그램
import rootReducer from '../reducer/FoodReduce'
// 대부분 파일 명을 주지만 Index.js 는 파일 명을 주지 않아도 됨
import {createLogger} from "redux-logger/src";

const logger = createLogger();
const initialState={}

const middleware =[thunk,logger];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
        // ... > thunk,logger를 주입해라
    )
)
export default store;

