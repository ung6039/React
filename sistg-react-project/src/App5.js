import React,{useState,useEffect} from "react";
import axios from 'axios'

// <App5 movie={movie}/>
// render()
/*
    String js;
    public void data(String json)
    {
         js=json;

        public void display()
        {

        }
    }
 */
// 16.08 version
const H =()=>{
    const color =['red','pink','green','blue','yellow']
    const no = parseInt(Math.random()*5);
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
}
// 자바 => 싱글턴
const H1=React.memo(()=> {
    const color =['red','pink','green','blue','yellow']
    const no = parseInt(Math.random()*5);
    return(
        <h1 className={"text-center"} style={{"color":color[no]}}>주간 박스오피스</h1>
    )
})

function App5(props){

        /*
         변수를 사용하지 못함
          왜냐! : 변수를 누적 하지 못함
        var movie=[];
        axios.get('http://localhost:3000/weekly.json').then((result)=>{
            movie=[...result.data]
            console.log(movie)
        })
        */
        // 될 수 있으면 setMethod에 값을 채워라 왜냐! 변수 값이 노출 되면 보안에 부담이 될 수 있음
        // 캡슐화와 유사
        const [movie,setMovie]=useState([]);
        const [detail,setDetail]=useState([]);
        const [show,setShow]=useState([]);
        useEffect(()=> {
            axios.get('http://localhost:3000/weekly.json').then((result) => {
                setMovie(result.data)
            })
        })
        const onMovieChange=(m)=>{
            setDetail(m);
            setShow(true);
        }

        // html 구현
        const html = movie.map((m,key)=>
                <div className="col-md-4" onClick={()=>onMovieChange(m)}>
                    <div className="thumbnail">
                        <img src={m.poster} alt="Lights" style={{"width":"100%"}} />
                        <div className="caption">
                            <p>{m.title}</p>
                        </div>
                    </div>
                </div>
        )
        return(
            <div className={"row"}>
                <H1/>
                <div className={"col-sm-8"}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                    {show===true?<Detail movie={detail}/>:null}
                </div>
            </div>
        )
}
function Detail(props) {

    return(
        <table className={"table"}>
            <tr>
                <td rowSpan={"5"} width={"30%"} className={"text-center"}>
                    <img src={props.movie.poster} width={"100%"} />
                </td>
                <td width={"70%"}>
                    <b>{props.movie.title}</b>
                </td>
            </tr>
            <td>
                배우 {props.movie.actor}
            </td>
            <tr>
                <td colSpan={"2"}></td>
            </tr>
            <tr>
                <td colSpan={"3"}>
                    {props.movie.story}
                </td>
            </tr>
        </table>
    )
}
export default App5;