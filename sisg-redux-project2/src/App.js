import React from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './component/Home'
import PopFoodhouse from './component/PopFoodhouse'
import Recipe from './component/Recipe'
import FoodNews from './component/FoodNews'
import RecommentFoodhouse from './component/RecommentFoodhouse'
import {Provider} from "react-redux";
import Store from './store/Store'

// main
function App() {
  return (
        <Provider store={Store}>
          <Router>
            <Header/>
            <switch>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/pop"} component={PopFoodhouse}/>
              <Route apth={"/recommand"} component={RecommentFoodhouse}/>
              <Route apth={"/Recipe"} component={Recipe}/>
              <Route apth={"/foodNews"} component={FoodNews}/>
            </switch>
            <Footer/>
          </Router>
        </Provider>
  );
}

export default App;
