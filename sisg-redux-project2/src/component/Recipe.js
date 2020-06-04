import React,{useEffect,useState} from "react";
import {FETCH_RECIPE} from "../actions/Types";
import {useDispatch,useSelector} from "react-redux";
import {fetchRecipe} from "../actions/FoodActions";
/*
    useDispatch ==> Action을 연결해주는 함수

    dispatch({
        type:Fetc~~
        payload:recipe.data
    })
    public void display(int a=10, int b) => display(20)
    ==> export default function (state=initialState,action){
            switch(action.type)
    }
 */
export default function Recipe(props) {
    const [page,setPage] = useState(1)
    const dispatch=useDispatch(); // reduce를 호출
    useEffect(()=>{
        dispatch(fetchRecipe(page))
    },[])
    const recipe_data = useSelector(state=>state.foods.recipe)
    const html =recipe_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <a href="/w3images/lights.jpg" target="_blank">
                    <img src={m.poster} alt="Lights" style={"width:100%"}/>
                        <div className="caption">
                            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                </a>
            </div>
        </div>
    )
    return(
        <div className={"row"}>
            <h1 className={"text-center"}>Recipe</h1>
        </div>
    )
}