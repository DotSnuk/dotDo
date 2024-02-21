import './style.css';
import logMessage, { logDateMessage } from './logger.js';
import { sortDueDate } from './sorter.js';
import AppLogic from './appLogic.js';

const app = AppLogic('Hampus');
app.createTodo('clean', { dueDate: 1 }, { priority: 2 });
app.createTodo('laundry', { dueDate: 3 }, { priority: 1 });
app.createTodo('cook dinner', { dueDate: 2 }, { priority: 1 });
app.createTodo('phone call', { dueDate: 0 }, { priority: 0 });
app.createProject('second proj');

app.removeTodo(1);
logMessage(app.getActiveProjectList());
// app.logSortedList();
