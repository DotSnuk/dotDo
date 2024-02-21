import ToDo from './Todo.js';
import User from './User.js';
import Project from './Project.js';
import logMessage, { logDateMessage } from './logger.js';

export default function AppLogic(name) {
  const currentUser = new User(name);

  function getUser() {
    return currentUser;
  }
  function createTodo(title, ...optionalPara) {
    const todo = new ToDo(title);
    if (optionalPara.length !== 0) {
      optionalPara.forEach(para => {
        _sortOptionalPara(todo, para);
      });
    }
    addToProject(todo);
  }
  function createProject(title) {
    const project = new Project(title);
    currentUser.addProject(project);
  }
  function removeTodo(index, projectIndex = 0) {
    currentUser.projectList[projectIndex].removeAndReturn(index);
  }
  function getInboxList(projectIndex = 0) {
    return currentUser.projectList[projectIndex].getProjectList();
  }
  function addToProject(todo, projectIndex = 0) {
    currentUser.projectList[projectIndex].addToProjectList(todo);
  }
  function _sortOptionalPara(todo, para) {
    // can I break these two up?
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
  function getSortedList() {
    return currentUser.inbox.getSortedList;
  }
  return {
    getUser,
    getInboxList,
    createTodo,
    createProject,
    getSortedList,
    removeTodo,
  };
}
