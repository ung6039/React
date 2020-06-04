import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchMovie} from "../action/MovieActions";
import {NavLink} from "react-router-dom";

function MovieReal2(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMovie(1,1));
    },[])
    const data = useSelector(state=>state.movies.movie);
    const html = data.map((m)=>
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
            <p>
            <NavLink to={"/movie_news"} calssNmae={"bnt btn-sm"}>영화뉴스</NavLink>
            </p>
            {html}
        </div>
    )

}
export  default MovieReal2;