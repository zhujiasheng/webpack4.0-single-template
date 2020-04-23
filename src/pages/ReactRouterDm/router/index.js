import First from '../First';
import Second from '../Second';
import { HashRouter,Route,Switch } from 'react-router-dom';
import React from 'react';

function BaseRouter () {
  return (
    <HashRouter>
      <Switch>
        <Route path="/first" component={First}></Route> 
        <Route path="/second" component={Second}></Route> 
      </Switch>
    </HashRouter>
  )
}

export default BaseRouter;
