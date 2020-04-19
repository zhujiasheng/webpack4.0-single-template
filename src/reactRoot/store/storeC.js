import { observable, action } from "mobx";

class storeC {
  @observable data = {
    list:1
  };
}

export default new storeC();
