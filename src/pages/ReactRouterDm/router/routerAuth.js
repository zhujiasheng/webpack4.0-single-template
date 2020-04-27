import React,{Component} from 'react';
import { Route,Redirect } from 'react-router-dom';
import config from './routerConfig';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

class RouterAuth extends Component {
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  render () {
    NProgress.start();

    setTimeout(() => {
      NProgress.done();
    },1000);
    console.log('render');

    const { location } = this.props;
    const { pathname } = location;
    console.log(pathname);
    const targetRouterConfig = config.find((v) => v.path === pathname);

    if(pathname == '/'){
      return <Redirect from="/" to="first" exact/>
    }

    return (<Route path={pathname} component={targetRouterConfig.component}></Route> )
  }
}

export default RouterAuth;
