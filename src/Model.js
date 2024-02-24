import ToDo from './Todo.js';

export default class Model {
  // testing
  constructor() {
    // this.currentUser;
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
    this.newProject('New website');
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
    const todo = new ToDo(title);
    if (optional) {
      // come back to this one (sortOptionalPara)
    }
    this.addToProject(todo);
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
