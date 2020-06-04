import React,{Component,Fragment} from "react";

// 생명 주기
// props => name="홍길동", sex, age 값을 받음
// -> <App3 />를 호출 당시 등록된 값을 props에서 값을 받음
// 변하지 않는 데이터를 보낼 때 props를 사용

// props => 불변
// state :: 수시로 변하는 데이터
/*
    일반 변수 (x)
    => 사용할 변수를 지정해 놓고 진행
    this.state ={
        page:1,
        data:[],
        detail:{}
    }

   constructor => componentWillMount > render =>compoDDOtnent
    => 이벤트 발생(페이지 클릭) :: render를 호출해라 => setState() => render(Ajax)=> render안에 ajax가 있음
                                                   data 저장
                                                ===============
                                               데이터 변경시 화면에 출력
                                                 => re-rendering()
                                                 -> 그 자리에서 화면이 바뀌는 이유

 */
export default class App3 extends Component{
    constructor(props) {
        super(props);
        console.log("constructor(props)")
        /*
            생성자 함수 App3(){ }
            없는 경우에는 => 자동 생성
            = (멤버) 변수 선언
            this.state
            이벤트 등록
         */
        //System.out.println()
        this.state={
            name:''
        }
        // 이벤트 등록
        this.nameChange=this.nameChange.bind(this);
    }
    nameChange(e){
        console.log("nameChange() Call...")
        this.setState({name:e.target.value}) // render()를 호출하기 위해서는 setState를 이용해야함
        // 그래야 화면을 변경 해줌
        // this.state.name=e.target.value;
    }

    componentWillUnmount() {
        // Mount가 되기 전에 수행하는 함수
        // Mount -> 메모리에 올리는 것
        // 외부 서버에서 데이터 읽어 온다
        console.log("componentWillUnmount() Call...")
    }
    // window.onload ==> $(function(){})
    // 다른 프레임워크와 연결 (jQuery,AngularJS,typeSciprt,....)
    componentDidMount() {
        // 메모리에 완료 되었음을 알려줌
        console.log("componentDidUnmount() Call...")
    }
    // 읽은 데이터를 화면에 출력
    /*
        화면에 출력 => HTML 이용한다
        HTML => JSX(JavaScript + XML)을 주로 사용한다.
        ML => 태그 형식 < > (( 태그와 속성으로 이루어짐 ))
               ======
               1) 여는 태그 <table>
               2) 닫는 태그 </table>
               3) 단독 태그 <br/>
            1.JSX
                = 반드시 전체를 포함하는 태그를 필요로 한다. (최상위 태그)
                    예)
                        <div> aaaa</div>
                        <div> bbb</div> => Error

                        <div>
                            <div> aaaa</div>
                            <div> bbb</div> => Error
                        </div>\
                = HTML 태그는 반드시 소문자를 사용한다.
                    <html>
                    <div> <Div> <DIV>(x)
                = 속성 값을 입력할 때는 반드시 ""
                  <input type="text">
                  >> React 안에서는 그렇음
                = 속성 중에 class => ClassName =""
                    style = {{"width":"200px","height":"150px"}}
                    style="{{"font-size":"10px"}} (X)
                    style="{{"fontSize":"10px"}}
                            background-color => backgroundColor
                            ( ' - ' ==> (첫 글자 대문자로)C
                    = 여는 태그와 닫는 태그가 일치
                    <a><b><c></b></c></a> (X)
                    <a><b><c></c></b></a> (O) ==> 포함 관계가 명확 해야함
                 = rowspan  = > rowSpan, colspan => colSpan
                 = 이벤트 처리
                   onclick  => onClick
                   onchange => onChange
                   onkey => onKey
                   onmouseover => onMouseOver

                   render() {
                       return (
                            {주석을 줄 때}
                       )
                   }
     */
    // render 안에서 주석을 줄 때 ( /* */ )을 사용
    render() {
        console.log("renderClass() Call...")
        return(
            /*<div>
                이름 :<input type={"text"} className={"input-sm"} size={"20"}
                    onchange={this.nameChange}
                />
                <h1>{this.state.name} </h1>
            </div>*/
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="/w3images/lights.jpg">
                        <img src="/w3images/lights.jpg" alt="Lights" style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                    </a>
                    </div>
            </div>
        )
    }
}
