import './style.css';
import ToDo from './todo.js';
import User from './user.js';
import logMessage, { logDateMessage } from './logger.js';
import { sortDueDate } from './sorter.js';
import AppLogic from './appLogic.js';

const app = AppLogic('Hampus');
app.createTodo('asd', { dueDate: 'asd' }, { priority: 2 });
logMessage(app.getProjectList());
// const second = new ToDo('second');
// second.dueDate = 4;
// const firstTodo = new ToDo('first');
// firstTodo.dueDate = 3;
// snuk.inbox.addToProjectList(second);
// snuk.inbox.addToProjectList(firstTodo);
// console.log(snuk.inbox.getListDueDate());
// console.log(sortDueDate(snuk.inbox.getListDueDate()));
