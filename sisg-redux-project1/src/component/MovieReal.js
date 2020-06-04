// 현재 상영 영화
import React,{Fragment,useEffect} from "react";
import {fetchMovie} from "../action/MovieActions";
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

function MovieReal(props){
    useEffect(()=> {
        props.fetchMovie(1,1)
    },[])

    const html = props.movies.map((m)=>
        <div className={"col-md-4"}>
            <div className={"thumbnail"}>
                <NavLink to={"/movie_detail/"+m.no}>
                <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className={"caption"}>
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return(
        <div className={"row"}>
            <h1 className={"text-center"}>현재 상영 영화</h1>
            {html}
        </div>
    )
}
const mapStateToprops = state =>({
    movies:state.movies.movie
})

export default connect(mapStateToprops,{fetchMovie})(MovieReal)