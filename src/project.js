export default class Project {
  constructor(title, deletable = true) {
    this.title = title;
    this.todoList = [];
    this.deleteableBool = deletable;
  }
  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
  set deleteableBool(bool) {
    this._deletableBool = bool;
  }
  get deleteableBool() {
    return this._deletableBool;
  }
  addTodo(todo) {
    this.todoList.push(todo);
  }
}
