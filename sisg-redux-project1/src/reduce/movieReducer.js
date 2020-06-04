import {FETCH_Movie, FETCH_Detail, FETCH_News, FETCH_NewsPop} from "../action/Types";

// VO설정 --- > State
/*
     저장 장소를 지정 해야함
     action :: % requestMapping과 유사
     DAO : nodejs를 이용해서 만듬
     
     Dispatcher에서 넘겨준 값을 Reducer에서 받음

     [스프레드 연산자]
     const a = [1,2,3]
     const b = [...a] => b=[1,2,3]
     const c = [4,5,6....a]
 */
const InitialState={
    // Fetch_movie
    movie:[],
    // Fetch_detail
    detail:{},
    news:[],
    pop:[]
}
// state가 갱신되면 reRendering( 값이 자동 갱신)
// dispatcher에서 값을 보내면 reduce에서 함수를 || 자동 호출 ||됨 (( 호출되었을 때 action에 값을 저장함)
//
export default function(state=InitialState,action){
    switch (action.type) {
        case FETCH_Movie:
            return{
                ...state, // 데이터 저장 공간
                movie: action.payload
            };
        case FETCH_Detail:
            return {
                ...state,
                detail:action.payload
            };
        case FETCH_News:
            return {
                ...state,
                news:action.payload
            };
        case FETCH_NewsPop:
            return {
                ...state,
                pop: action.payload
            };
        default:
            return state;
    }
}
