import ToDo from './Todo.js';
import User from './User.js';
import Project from './Project.js';
import logMessage, { logDateMessage } from './logger.js';

export default function AppLogic(name) {
  const currentUser = new User(name);
  let activeProject = currentUser.inbox;

  function getUser() {
    return currentUser;
  }
  function changeActiveProject(projectIndex = 'inbox') {
    if (projectIndex !== 'inbox') {
      activeProject = currentUser.projectList[projectIndex];
    } else {
      activeProject = currentUser.inbox;
    }
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
  function removeTodo(index) {
    return activeProject.removeAndReturn(index);
  }
  function moveTodo(todoIndex, targetProjectIndex) {
    const todoToMove = removeTodo(todoIndex);
    currentUser.projectList[targetProjectIndex].addToProjectList(todoToMove);
  }
  function getProjects() {
    return currentUser.projectList;
  }
  function getActiveProjectList() {
    return activeProject.getProjectList();
  }
  function addToProject(todo) {
    activeProject.addToProjectList(todo);
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
  function createDummyThings() {
    createTodo('clean', { dueDate: 1 }, { priority: 2 });
    createTodo('laundry', { dueDate: 3 }, { priority: 1 });
    createTodo('cook dinner', { dueDate: 2 }, { priority: 1 });
    createTodo('phone call', { dueDate: 0 }, { priority: 0 });
    createProject('Second');
    createProject('Third project');
  }
  function getSortedList() {
    return currentUser.inbox.getSortedList;
  }
  return {
    getUser,
    getProjects,
    changeActiveProject,
    getActiveProjectList,
    moveTodo,
    createTodo,
    createProject,
    getSortedList,
    removeTodo,
    createDummyThings,
  };
}
