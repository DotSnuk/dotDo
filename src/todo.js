import { format, compareAsc } from 'date-fns';
import logMessage from './logger';

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
    return format(this._date, 'dd/MM/yyyy');
  }
  set notes(value) {
    this._notes = value;
  }
  get notes() {
    return logMessage(this._notes);
  }
  setCompleted() {}
}
