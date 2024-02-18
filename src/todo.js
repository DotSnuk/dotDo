import { format, add, compareAsc } from 'date-fns';
import logMessage, { logDateMessage } from './logger';

export default class ToDo {
  constructor(title) {
    this.title = title;
    this.priority;
    this.description;
    this.dateCreated = new Date();
    this.dueDate;
    this.notes;
    this.completedBool = false;
  }
  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
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
  set dueDate(daysFromToday) {
    this._dueDate = add(new Date(), { days: daysFromToday });
  }
  get dueDate() {
    return this._dueDate;
  }

  setCompleted() {}
}
