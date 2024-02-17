import './style.css';
import logMessage from './logger.js';
import ToDo from './todo.js';

logMessage('hello');
const to = new ToDo('thing');
console.log(to);
console.log(to.dateCreated);
to.notes = 'Hello';
