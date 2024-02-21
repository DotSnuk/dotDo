import Project from './Project.js';

export default class User {
  constructor(name) {
    this.name = name;
    this.projectList = [];
    this.init();
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  init() {
    const inbox = new Project('Inbox', false);
    this.addProject(inbox);
  }
  addProject(project) {
    this.projectList.push(project);
  }
}
