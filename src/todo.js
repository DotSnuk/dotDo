import { format, add, compareAsc } from 'date-fns';
import logMessage, { logDateMessage } from './logger';

export default class ToDo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.priority;
    this.dateCreated = new Date();
    this.dueDate;
    this.notes;
    this.completedBool = false;
  }
  // set title(value) {
  //   this._title = value;
  // }
  // get title() {
  //   return this._title;
  // }
  set dateCreated(value) {
    this._date = value;
  }
  get dateCreated() {
    return this._date;
  }
  set notes(value) {
    this._notes = value;
  }
  get notes() {
    return this._notes;
  }
  set dueDate(date) {
    this._dueDate = new Date(date);
  }
  get dueDate() {
    return this._dueDate;
  }
}
