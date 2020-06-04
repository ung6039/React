import React,{Component,Fragment} from "react";
// ${} {} => 변수 출력 , 문자열도 출력이 가능
// 속성명이 들어갈 때에는 ""(큰 따옴표가 필요함)

// render/ return() 아래에는 돔 형식으로 처리되어야함
// 이 때 가상 으로 돔 형식을 만들어주기도 함

/*
    div.container div.row
    React => 화면 UI(HTML) => render()
          =============== JSX(Javscript + XML) => ES6
          화면 UI => class 기반, function 기반 : Hooks
    React
    JSX, 가상돔,
    class,Function
    Hooks
    Redux
    Mobx, Saga
    React Redux  Mobx(Saga)
    ====  ====  ==========
    JSP   MVC   Spring

    XML 문법
        = 클래스 명 , 함수 명 ==> class App function App2 => App2()
                             ========= ==============
                              <App >        <App2>
           1. HTML 태그와 사용자 정의 태그를 구분.
              =======   ============
              반드시 소문자     첫 자만 대문자
        =
         <ul>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
         </ul>

         ==> render()
            {
                return(
                <ul>
                    <li></li>
                </ul>
                )
            }
            ReactDOM.render()
            => XML 형태 = > HTML로 전환
            React.createElement('ul',null,
                                    => 클래스 이름이나 id가 들어감
            React,createElement('li',null,'Java1'),
            React,createElement('li',null,'Java2')
            )
            ==> 가상 메모리에 올라간다.

 */
class App2 extends Component{
    //React 시작점
    render() {
        return(
            // => 삼항연산자, map,
           /*
           <ul>
                <li>123</li>
                <li>123333</li>
                <li>3333333</li>
            </ul>
            */
        React.createElement('ul',null,
            React.createElement('li',null,'Java1'),
            React.createElement('li',null,'Java2')
        )
        )
    }
}

export default App2