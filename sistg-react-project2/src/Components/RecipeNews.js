import React, {useEffect, useState} from "react";
import axios from "axios";

export default function RecipeNews(props) {
    const [news,setNews]= useState([])
    const [fd,setFd]=useState('레시피')

    useEffect(()=>{
        axios.get('http://localhost:3355/recipe_news',{
            params:{
                fd:fd
            }
        }).then((res)=>{
            setNews(res.data)
            console.log(res.data);
        })
    },[])
    //deps => 사용하지 않으면 렌더링 할 때마다 호출 => 무한 루프

    // 이벤트 발생
    const onDataChange=(e)=>{
        setFd(e.target.value)
    }
    const onBtnClick=()=>{
        axios.get('http://localhost:3355/recipe_news',{
            params:{
                fd:fd
            }
        }).then((res)=>{
            setNews(res.data)
            console.log(res.data);
        })
    }
    const html=news.map((m)=>
        <table className={"table"}>
            <tr>
                <td><b><a href={m.link}>{m.title}</a></b></td>
            </tr>
            <tr>
                <td>{m.description}</td>
            </tr>
            <tr>
                <td className={"text-right"}>
                    {m.author}
                </td>
            </tr>
        </table>
    )
    return(
        <React.Fragment>
        <div className={"row"}>
            <h1 className={"text-center"}>네이버 뉴스 검색</h1>
            <div>
                <input type={"text"} className={"input-sm"} size={"20"} value={fd}
                onChange={onDataChange}/>
                <button className={"btn btn-sm btn-danger"}
                    onClick={onBtnClick}>검색</button>
            </div>
            <table className={"table"}>
                <tr>
                    <td>
                        {html}
                    </td>
                </tr>
            </table>

        </div>
        </React.Fragment>
    )

}