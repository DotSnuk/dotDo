export default class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }
  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
  addTodo(todo) {
    this.todoList.push(todo);
  }
}
