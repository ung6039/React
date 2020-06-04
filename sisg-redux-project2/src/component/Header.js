// 메뉴가 올라가는 위치
import React,{Fragment} from "react";
// <Header/> = > return값 => HTML
import {NavLink} from "react-router-dom";

export default function Header() {

    return(
        <Fragment>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">SIST FoodHouse</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink exact to={"/"}>HOME</NavLink></li>
                        <li><NavLink to={"/pop"}>인기 맛집</NavLink></li>
                        <li><NavLink to={"/recommand"} >추천 맛집</NavLink></li>
                        <li><NavLink to={"/Recipe"}>레시피</NavLink></li>
                        <li><NavLink to={"/foodNews"}>맛집 뉴스</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="jumbotron text-center">
            <h1>SIST 맛집</h1>
            <form>
                <div className="input-group">
                    <input type="text" className="form-control" size="30" placeholder="맛집 검색" required/>
                        <div className="input-group-btn">
                            <button type={"button"} className="btn btn-danger">검색</button>
                        </div>
                </div>
            </form>
        </div>
    </Fragment>
    )
}