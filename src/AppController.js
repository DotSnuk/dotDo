import View from './View.js';
import Model from './Model.js';

export default class AppController {
  // for testing a simple MVC design
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindGetInbox(this.handleGetInbox);
  }

  // sorter = handler => {
  //   const handl = {
  //     todo: this.handleUser(data),
  //   };
  //   return handl[handler];
  // };
  handleGetInbox = () => {
    return this.model.getInbox();
  };

  handleAddTodo = data => {
    return this.model.addUser(data);
  };
  handleAddUser(data) {
    this.model.addUser(data);
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
