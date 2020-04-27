
import { HashRouter,Route,Switch } from 'react-router-dom';
import React from 'react';
import RouterAuth from './routerAuth';

function BaseRouter () {
  return (
    <HashRouter>
      <Switch>
        <RouterAuth/>
      </Switch>
    </HashRouter>
  )
}

export default BaseRouter;
