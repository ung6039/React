import React from 'react';
import MovieReal from './component/MovieReal'
import MovieReal2 from './component/MovieReal2'
import MovieDetail2 from './component/MovieDetail2'
import MovieNews from './component/MovieNews'
import MovieNewsPop from './component/MovieNewsPop'
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
      <Provider store={store}>
          <div className={"container"}>
              <switch>
                <Route exact path={"/"} component={MovieReal}/>
                  <Route exact path={"/MovieReal2/"} component={MovieReal2}/>
                  <Route path={"/movie_detail/:no"} component={MovieDetail2}/>
                  <Route path={"/movie_news"} component={MovieNews}/>
                  <Route path={"/news_pop"} component={MovieNewsPop}/>
              </switch>
          </div>
      </Provider>
      </Router>
  );
}
export default App;
