import './style.css';
import logMessage, { logDateMessage } from './logger.js';
import { sortDueDate } from './sorter.js';
import AppLogic from './appLogic.js';
import AppController from './AppController.js';
import Renderer from './renderer.js';

const app = new AppController();

// const app = AppLogic('snuk');
// const DomRenderer = new Renderer(app);
// window.myapp = app;
// const app = AppLogic('Hampus');
// window.myApp = app; // for dev tools purpose
// app.createDummyThings();
// logMessage(app.getActiveProjectList());
// app.logSortedList();
