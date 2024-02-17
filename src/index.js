import './style.css';
import { format, compareAsc } from 'date-fns';
import logMessage from './logger.js';
import ToDo from './todo.js';

logMessage('hello');
const to = new ToDo('thing');
