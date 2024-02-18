import './style.css';
import ToDo from './todo.js';
import User from './user.js';
import logMessage, { logDateMessage } from './logger.js';
import { sortDueDate } from './sorter.js';

const snuk = new User('snuk');
const second = new ToDo('second');
second.dueDate = 4;
const firstTodo = new ToDo('first');
firstTodo.dueDate = 3;
snuk.inbox.addToProjectList(second);
snuk.inbox.addToProjectList(firstTodo);
console.log(snuk.inbox.getListDueDate());
console.log(sortDueDate(snuk.inbox.getListDueDate()));
