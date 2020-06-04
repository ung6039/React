import React from "react";
import {NavLink} from "react-router-dom";

export default function Menu(props) {
    return(
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <NavLink className="navbar-brand" to={"/"}>WebSiteName</NavLink>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/recipe"}>레시피</NavLink></li>
                <li><NavLink to={"/chef"}>쉐프</NavLink></li>
                <li><NavLink to={"/recommend"}>레시피 추천</NavLink></li>
                <li><NavLink to={"/news"}>레시피 뉴스</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}