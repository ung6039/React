import React,{useEffect} from "react";
import {fetchDetail, fetchMovie} from "../action/MovieActions";
import {connect} from 'react-redux'
// reducer에 있는 state를 가지고 온다


function MovieDetail(props){
    useEffect(()=>{
        props.fetchDetail(props.match.params.no);
    },[])
    const html ="";
    return(
        <div className={"row"}>
          <h1 className={"text-center"}>{props.detail.title} 상세보기</h1>
            <table className={"table"}>
                <tr>
                    <td width={"30%"} className={"text-center"} rowSpan={"5"}>
                        <img src={props.detail.poster} width={"100%"}/>
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>
                        {props.detail.director}
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>
                        {props.detail.actor}
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>
                        {props.detail.genre}
                    </td>
                </tr>
                <tr>
                    <td width={"70%"}>
                        {props.detail.grade}
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"}>
                        {props.detail.story}
                    </td>
                </tr>
            </table>
        </div>
    )
}
const mapStateToprops = state => ({
    movies: state.movies.detail
})

export default connect(mapStateToprops,{fetchDetail})(MovieDetail)