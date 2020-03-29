import React,{ Component } from 'react';
import { render } from "react-dom";
import AppStore from "./store";
import { observer } from "mobx-react";
React.Component.prototype.AppStore = AppStore;
window.AppStore = AppStore;

@observer
class App extends Component {
  add = () => {
    console.log('hello');
    this.AppStore.storeA?.addData();
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
