import React,{Component} from "react";
import axios from 'axios';

//[] => lIST
//{}        {}
class App4 extends Component {
    // <App4 movie={movie}/> => 자동으로 props에 값을 채워준다.
    // 이벤트 등록, state변수를 설정
    // w자바배열 Ojbect oebjp
    // Object object = i2
   
    constructor(props) {
        super(props)
        this.state = {
            detail: {},
            show: false,
            movie:[]
        }
    }    // 이벤트 ( 행위를 만들 때 사용 click 했을 때
    onMovieChange(m){
         this.setState({detail:m,show:true})
          // serState를 호출하면서 render()를 같이 호출
          // >> 새로운 데이터를 다시 출력
    }

    componentWillUnmount() {
       // 필요한 데이터를 읽어 온다 => state
        axios.get("http://localhost:3000/weekly.json").then((result)=>{
            this.setState({movie:result.data})
        })
    }

    // 화면 출력
    render() {
        // html 구현
        const html = this.state.movie.map((m,key)=>
        <div className="row">
            <div className="col-md-8" onClick={this.onMovieChange.bind(this.m)}>
            <div className="thumbnail">
            <img src={m.poster} alt="Lights" style={{"width":"100%"}} />
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
            </div>
        </div>
            )
        return(
            <div className={"row"}>
                <div className={"col-sm-8"} onClick={this.onMovieChange.bind(this.m)}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                    {this.state.show==true?<MovieDetail movie={this.state.detail}/>:null}
                </div>

            </div>
        )
    }
}
class MovieDetail extends Component{
        render(){

            return(
                <table className={"table"}>
                    <tr>
                        <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                            <img src={this.props.movie.poster} width={"100%"} />
                        </td>
                        <td width={"70%"}>
                            <b>{this.props.movie.title}</b>
                        </td>
                    </tr>
                        <td>
                            배우 {this.props.movie.actor}
                        </td>
                    <tr>
                       <td colSpan={"2"}></td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}>
                            {this.props.movie.story}
                        </td>
                    </tr>
                </table>
            )
        }
}
export default App4