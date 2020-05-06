import React from 'react';
import { Switch, HashRouter as Router ,Route } from 'react-router-dom' ;
import { IndexPage , IntroPage } from './container' ;
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={IndexPage} /> 
            <Route exact path="/intro" component={IntroPage} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
