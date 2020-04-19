import React,{ Component } from 'react';
import { render } from "react-dom";
import AppStore from "./store";
import { observer } from "mobx-react";
import './style.css';
React.Component.prototype.AppStore = AppStore;
window.AppStore = AppStore;

@observer
class App extends Component {
  add = () => {
    console.log('hello');
    this.AppStore.storeA?.addData();
  }

  componentWillMount () {
    console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
  }
  
  render () {
    return (<div>
      name:{this.AppStore.storeA?.data}
      <button onClick={this.add}>add</button>
    </div>)
  }
}

var root = document.querySelector('#root');
render(<App/>,root);
