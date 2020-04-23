import React,{ Component } from 'react';
import { render } from 'react-dom';
import AppStore from "./store";
import { observer } from "mobx-react";
React.Component.prototype.AppStore = AppStore;
// window.AppStore = AppStore;

@observer
class MobxDm extends Component {
  add = () => {
    this.AppStore.storeA?.addData();
  }

  render () {
    return <div>{this.AppStore.storeA?.data}<button onClick={this.add}>add</button></div>
  }
}

render(<MobxDm/>,document.querySelector('#root'));
