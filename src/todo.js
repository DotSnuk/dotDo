export default class ToDo {
  constructor(title) {
    this.title = title;
  }
  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
}
