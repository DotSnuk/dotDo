import ToDo from './todo.js';
import User from './user.js';
import Project from './project.js';
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
  function getProjectList() {
    return currentUser.inbox.getProjectList();
  }
  function addToProject(todo) {
    currentUser.inbox.addToProjectList(todo);
  }
  function _sortOptionalPara(todo, para) {
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
  return { getUser, getProjectList, createTodo };
}
