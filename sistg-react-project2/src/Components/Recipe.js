import React,{useState,useEffect,useCallback}from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom'

/*
    useEffect -> 서버나 파일을 읽어온다
    useState => 읽어온 파일을 저장,


 */

export default function Recipe(props) {
    // server에서 배열로 값을 보냈음 --> 받을 때에도 배열로 값을 받아야하
    const [recipe,setRecipe] =useState([])
    const [page,setPage]= useState(1)
    const [total,setTotal] = useState(0)
    
    // 값을 받을 때와 보낼 때 보내는 방식을 맞춰서 처리해야 함  get -> get / post -> post

    // use Effect :: 이벤트 발생 시에 계속 호출
    // componentWillCOmponet(){}
    // constructor()=> componentWillCOmponet() => render => componentDidComponent()
    // <APP/> -> 이 코딩을 입력 하면 constructor()=> componentWillCOmponet() => render => componentDidComponent() { 요 기능을 수행함 }
    useEffect(()=>{
        axios.get('http://localhost:3355/recipe_data',{
            // ?page=1&aaa=1,
            params:{
                page:page
            }
        }).then((result)=>{
            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setRecipe(result.data)
        })
    },[recipe])
    useEffect(()=>{
        axios.get('http://localhost:3355/total_data').then((result)=>{

            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setTotal(result.data.total)
        })
    },[total])
    // deps:[]  데이터가 바뀌면 수행 해라
    // 이벤트 처리
    const onPrev=()=>{
        setPage(page>1?page-1:page);
        axios.get('http://localhost:3355/recipe_data',{
            // ?page=1&aaa=1,
            params:{
                page:page
            }
        }).then((result)=>{
            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setRecipe(result.data)
        })
    }
    const onNext=()=>{
        setPage(page<total?page+1:page);
        axios.get('http://localhost:3355/recipe_data',{
            // ?page=1&aaa=1,
            params:{
                page:page
            }
        }).then((result)=>{
            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setRecipe(result.data)
        })

    }

    const html=recipe.map((m)=>
        <div className="col-md-3">
            <div className="thumbnail">
                <NavLink to={"/detail/"+m.no}>
                    <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                        <div className="caption">
                            <p style={{"fontsize":"px"}}>{m.title}</p>
                            <sub style={{"color":"gray"}}>{m.chef}</sub>
                        </div>
            </div>
        </div>
    )
    return(
    <React.Fragment>
       <div className={"row"}>
           {html}
        </div>
        <div className={"row text-center"}>
            <button className={"btn btn-lg btn-primary"} onClick={onPrev}>이전</button>
            {page} page/ {total} pages
            <button className={"btn bnt-lg btn-danger"} onClick={onNext}>다음</button>
        </div>
</React.Fragment>
    )
}