import React from "react";
import {FETCH_Detail, FETCH_Movie, FETCH_News, FETCH_NewsPop} from "./Types";
import axios from 'axios'
// fetchMovie(1,1) fetchMovie(1,2)
/*

        React(화면) =======> 액션 함수 호출(ex) type{FETCH_DETAIL}) ======> 처리된 내용을 저장
                이벤트 발생
                = 메뉴 클릭
                = 버튼 클릭
                = 데이터 입력
                = 값 입력

       State :: 데이터 저장소 ( % 자바의 VO의 기능과 유사 ) > 하지만 VO를 자바스크립트로 만들 수 없음
       데이터가 많으면 [ ] : list
       데이터가 1개 이면 { } : Object
        reducer(state) ::
        setState()를 호출 하여 render()를 통해 값을 변경 하기 위해서

      ?? 상태 관리 프로그램
      데이터가 변해야 출력함
     => react(화면)로 갱신된 State(변화한 데이터)를 출력

     React =====> reducer ======> React
         dispatcher        =>State (구독( % Spring의 ViewResolver 와 유사)
       
     State가 갱신 되면 자동으로 ReRendering이 됨
     setState() : 자동 갱신
     Dispatcher :Request를 대신 하여 데이터를 UI_Component(화면)에 전달

     ?? 데이터 값은 속성 값을 통해서 넘어온다 props를 통해 받는다
     ?? State ?? Props

     JSP ====> Model(@Controller) =======> JSP
        DispatcherServlet   request  => jsp
                           ========= ViewResolver(JSP에 Request를 전송)
                             Model.addAttribute();
 */
//  type :: 현재 상영 영화,주간,연간,월간 등을 구분
export const fetchMovie=(page,type)=>dispatch=>{
    axios.get('http://localhost:3355/movie_data',{
        params:{
            page:page,
            type:type
        }
    }).then(movies=>dispatch({
        type:FETCH_Movie,
        payload:movies.data
        // 실제 데이터 값을 보냄 :: payloadL:movie.data
    }))
}
// []==> [{}]
 // => {0}:: 첫 번째 값을 받아야 한다.
export const fetchDetail=(no)=>dispatch=>{
    axios.get('http://localhost:3355/movie_detail',{
        params:{
           no:no
        }
    }).then(movies=>dispatch({
        type:FETCH_Detail,
        payload:movies.data[0]
        // 실제 데이터 값을 보냄 :: payloadL:movie.data
    }))
}
export const fetchNews=()=>dispatch=>{
    axios.get('http://localhost:3355/movie_news',).then(news=>dispatch({
        type:FETCH_News,
        payload:news.data
        // 실제 데이터 값을 보냄 :: payloadL:movie.data
    }))
}
export const fetchNewsPop=()=>dispatch=>{
    axios.get('http://localhost:3355/pop_data',).then(pop=>dispatch({
        type:FETCH_NewsPop,
        payload:pop.data
    }))
}

