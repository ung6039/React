import {FETCH_NEWS, FETCH_RECIPE} from "../actions/Types";

const initialState ={
    news:[],
    recipe:[],
    category:[],
    food:[],
    food_detail:{},
    recipe_detail:{},
    pop_food:[],
    recommend_food:[]
}

// request == state ==> state.news
/*
     react => JSP
     store => DispatcherServlet
     action => @RequestMapping, DAO
     reducer => Model(@Controller)
     request = > state

     JSP  => DispatcherServlet  => @RequestMapping => DAO => request
     React => store => action = > reduce => state  ===> Redux(Front MVC)
     
     React :: 이벤트 발생 ===> action{Type:Fetch_News,payload:검색된 데이터} => reducer(데이터를 받아서 state)
             ===========
             시작 => 초기 값

             reducer ( state가 갱신 ) ==> re-rendering ==> 화면 변경
                                        =============
                                            ajax
 */
export default function(state=initialState,action){
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                news:action.payload
            }
        case FETCH_RECIPE:
            return{
                ...state,
                recipe: action.payload
            }
        default:
            return state
    }
}