import View from './View.js';
import Model from './Model.js';

export default class AppController {
  // for testing a simple MVC design
  constructor() {
    this.model = new Model();
    this.view = new View();
    console.log(this);
  }
  logg() {
    console.log('works');
  }

  handleAddUser(data, callback) {
    const dataFromModel = this.model.addUser(data);
    this.view.update(dataFromModel, callback);
  }
  // set user(name) {
  //   this._user = { name };
  //   this._createModel(this.user);
  // }
  // get user() {
  //   return this._user;
  // }
  // _createModel(user) {
  //   this.model = new Model(user);
  // }
}
