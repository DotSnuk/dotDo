import { sortDueDate } from './sorter.js';

export default class Project {
  constructor(title, deletable = true) {
    this.title = title;
    this.list = [];
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
  addToProjectList(obj) {
    this.list.push(obj);
  }
  getListDueDate() {
    const listWithDueDate = this.list.filter(
      item => item.dueDate !== undefined,
    );
    return listWithDueDate;
  }
}
