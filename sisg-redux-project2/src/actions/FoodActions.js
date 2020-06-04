import {FETCH_NEWS} from "./Types";
import {FETCH_RECIPE} from "./Types";
import axios from 'axios'
import {createDispatchHook} from "react-redux";

// DAO dispatch(fetchNews('')) => action={type:FETCH_NEWS}
// dispatcher -> reducer 안에 있는 function( 여기서 state에 값을 채워줌) 이 자동 호출

export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost:3355/news',{
        params:{
            fd:fd
        }
    }).then(news=>dispatch({
        type:FETCH_NEWS,
        payload:news.data
    }))
}

export const fetchRecipe=(page)=>dispatch=>{
    axios.get('http://localhost:3355/recipe',{
        params:{
            page:page
        }
    }).then(recipe=>dispatch({
        type:FETCH_RECIPE,
        payload: recipe.data
    }))
}
// REDCUCE--> dispatch({type,payload})--> fucntion(state,action)
// (( action ))에 type,payload 값을 받음

// action 과 reduce를 모아주면 store
