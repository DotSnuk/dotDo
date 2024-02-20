import { sortDueDate, sortByProperty } from './sorter.js';

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
  set list(value) {
    this._list = value;
  }
  get list() {
    return this._list;
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
  getProjectList() {
    return this.list;
  }
  getListDueDate() {
    const listWithDueDate = this.list.filter(
      item => item.dueDate !== undefined,
    );
    return listWithDueDate;
  }
  removeAndReturn(index) {
    return this.list.splice(index, 1);
  }

  getSortedList() {
    return this.list.sort(sortByProperty('dueDate'));
  }
}
