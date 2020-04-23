import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Link,HashRouter } from 'react-router-dom';
import BaseRouter from './router';

class ReactRouterDm extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Link to="/first">first</Link>&nbsp;
          <Link to="/second">Second</Link>
        </div>
        <BaseRouter/>
      </HashRouter>
    )
  }
}

render(<ReactRouterDm/>,document.querySelector('#root'));
