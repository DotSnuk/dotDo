export default class Model {
  // testing
  constructor() {
    // this.currentUser;
  }
  addUser(data) {
    const newUser = {
      name: data,
      age: this.getRandom(),
      notes: 'Learning callbacks',
    };
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

  // createProject(title) {
  //   const project = { title, projectList: [] };
  //   return project;
  // }
}
