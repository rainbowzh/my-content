import React from 'react';
import { Switch, HashRouter as Router ,Route } from 'react-router-dom' ;
import { IndexPage , IntroPage, LoginPage, ArticlePage, EditPage } from './container' ;
import { AppProvider } from './state' ;
import './App.scss';

function App() {
  const initData = {
    login : false ,
    username : "" ,
  } ;

  const reducer = (state:any, action:any) => {
    const { login ,username } = action ;
    if(action.type === 'CHANGE_LIGIN') {
      return { login : login }
    }
    if(action.type === 'GETUSER_NAME') {
      return { name : username }
    }
  }

  return (
    <div className="App">
      <AppProvider initValue={initData} reducer={reducer}>
      <Router>
        <Switch>
            <Route exact path="/" component={IndexPage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/intro" component={IntroPage}></Route>
            <Route exact path="/article" component={ArticlePage}></Route>
            <Route exact path="/edit" component={EditPage}></Route>
        </Switch>
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;
