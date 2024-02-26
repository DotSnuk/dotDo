import ToDo from './Todo.js';

export default class Model {
  constructor() {
    this.idCounter = 0;
    this.inbox = this.createProject('Inbox');
    this.projects = [];
    this.init();
  }
  init() {
    // load todo placeholders
    this.addTodo('clean');
    this.addTodo('phone call');
    this.addTodo('cook dinner');
    this.addTodo('laundry');
  }
  increaseIdCounter() {
    this.idCounter++;
  }
  createProject(title) {
    const project = { title, projectList: [] };
    return project;
  }
  newProject(title) {
    this.projects.push(this.createProject(title));
  }
  addToProject(todo, project = this.inbox) {
    project.projectList.push(todo);
  }
  addTodo(title, ...optional) {
    const todo = new ToDo(this.idCounter, title);
    this.increaseIdCounter();
    if (optional.length > 0) {
      todo.dueDate = optional[0];
    }
    this.addToProject(todo);
    return todo;
  }
  switchComplete(todoId) {
    // can be optimized. if projects.length > 0...
    // might not need to mergelists, but works for now
    const mergedList = this.getAllProjectsMerged();
    const todo = mergedList.find(todo => todo.id === parseInt(todoId));
    todo.completedBool = !todo.completedBool;
    console.log(todo);
  }
  getAllProjectsMerged() {
    let projectsList = [];
    projectsList = projectsList.concat(this.inbox.projectList);
    this.projects.forEach(project => {
      projectsList = projectsList.concat(project.projectList);
    });
    return projectsList;
  }
  getInbox() {
    return this.inbox.projectList;
  }
  getProjectsTitle() {
    const projectsList = [];
    this.projects.forEach(project => {
      projectsList.push(project.title);
    });
    return projectsList;
  }
  _sortOptionalPara(todo, para) {
    // come back to this one
    const paraParser = {
      dueDate: value => {
        todo.dueDate = value;
      },
      priority: value => {
        todo.priority = value;
      },
    };
    for (const [key, value] of Object.entries(para)) {
      paraParser[key]
        ? paraParser[key](value)
        : logMessage('not in paraParser');
    }
  }
  addUser(data) {
    const newUser = {
      name: data,
      age: this.getRandom(),
      notes: 'Learning callbacks',
    };
    console.log('adduser gets called');
    return newUser;
  }
  getRandom() {
    return Math.floor(Math.random() * 80);
  }
  // set currentUser(user) {
  //   this._currentUser = user;
  // }
  // get currentUser() {
  //   return this._currentUser;
  // }
  // initUserSetup() {
  //   const inbox = this.createProject('Inbox');
  //   Object.assign({}, this.currentUser, inbox, {
  //     list: [],
  //   });
  // }
  // createUser(name) {
  //   this.currentUser = { name };
  //   this.initUserSetup();
  // }
  // newUser() {
  //   return Object.assign({}, this.currentUser, {
  //     inbox: this.createProject('inbox'),
  //   });
  // }
}
