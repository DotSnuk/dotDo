import View from './View.js';
import Model from './Model.js';

export default class AppController {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindSwitchComplete(this.handleSwitchComplete);
    this.view.bindAddProject(this.handleAddProject);
    // for initial placeholder todo's
    this.view.init(this.model.getProject(0));
  }
  handleGetInbox = () => {
    return this.model.getInbox();
  };
  handleSwitchComplete = todoId => {
    this.model.switchComplete(todoId);
  };
  handleAddProject = title => {
    return this.model.newProject(title);
  };
  // change argument names
  handleAddTodo = (data, ...option) => {
    return this.model.addTodo(data, ...option);
  };
  handleAddUser(data) {
    this.model.addUser(data);
  }
}
