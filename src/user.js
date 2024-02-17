import Project from './project.js';

export default class User {
  constructor(name) {
    this.name = name;
    this.inbox = new Project('Inbox', false);
    this.projectList = [];
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
}
