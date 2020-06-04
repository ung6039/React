import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchNewsPop} from "../action/MovieActions";

function MovieNewsPop(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNewsPop())
    },[])

    const data = useSelector(state=>state.movies.pop)
    const html = data.map((m)=>
        <table className={"table"}>
            <tbody>
            <tr>
                <td>
                    <a href={m.link}>{m.title}</a>
                </td>
            </tr>
            <tr>
                <td>
                    <img src={m.poster} width={"100%"}/>
                </td>
            </tr>
            <tr>
                <td>
                    {m.content}
                </td>
            </tr>
            <tr>
                <td className={"text-right"}>
                    {m.author}
                </td>
            </tr>
            </tbody>
        </table>
    )
    return(
        <table className={"table"}>
            <tr>
                <td>
                    <h1>값을 출력??</h1>
                </td>
            </tr>
            <tbody>
            <tr>
                <td>
                    {html}
                </td>
            </tr>
            </tbody>
        </table>
    )

}
export default MovieNewsPop;