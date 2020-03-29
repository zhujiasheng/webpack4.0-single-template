import { observable,action} from "mobx";

class storeA {
  @observable data = 1;
  
  @action.bound
  addData(){
    this.data++;
  }
}

export default new storeA();
