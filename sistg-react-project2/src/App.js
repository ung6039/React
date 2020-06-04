import React from 'react';
import './App.css';
import Header from './Components/Header'
import Recipe from './Components/Recipe'
import Chef from './Components/Chef'
import RecipeNews from './Components/RecipeNews'
import RecipeRecommend from './Components/RecipeRecommend'
import Home from './Components/Home'
import RecipeDetail from "./Components/RecipeDetail";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {

  return(
      <Router>
        <Header/>
        <div className={"container"}>
          <div className={"jumbotron"}>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/recipe"} component={Recipe}/>
                <Route path={"/chef"} component={Chef}/>
                <Route path={"/news"} component={RecipeNews}/>
                <Route path={"/recommend"} component={RecipeRecommend}/>
                <Route path={"/detail/:no"} component={RecipeDetail}/>
            </Switch>
          </div>
        </div>
      </Router>
  );

}
export default App;
