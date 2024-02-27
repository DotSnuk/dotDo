import './style.css';
import { startOfToday, format } from 'date-fns';

export default class View {
  constructor() {
    this.content = document.getElementById('content');
    this.sidebar = document.getElementById('sidebar');
  }
  init(todos) {
    this.initSidebar();
    this.initContent(todos);
    this.initHeader();
  }
  createElement(element, ...classes) {
    const newElement = document.createElement(element);
    if (classes) {
      classes.forEach(newClass => this.addClass(newElement, newClass));
    }
    return newElement;
  }
  addClass(element, newClass) {
    element.classList.add(newClass);
  }
  initHeader() {
    const header = document.getElementById('header');
    const titleWrapper = this.createElement('div');
    titleWrapper.id = 'logo';
    titleWrapper.innerText = 'dotDo';
    header.appendChild(titleWrapper);
  }
  initSidebar() {
    this._initInbox();
    this._initProjects();
  }
  _initInbox() {
    const ulInbox = this.createElement('ul');
    this.sidebar.appendChild(ulInbox);
    const li = this.createElement('li');
    ulInbox.appendChild(li);
    const a = this.createElement('a');
    a.innerText = 'Inbox';
    a.href = '#';
    li.appendChild(a);
  }
  _initProjects() {
    const ulProjects = this.createElement('ul');
    this.sidebar.appendChild(ulProjects);
    const li = this.createElement('li');
    ulProjects.appendChild(li);
    const a = this.createElement('a');
    a.innerText = 'Projects';
    a.href = '#';
    li.appendChild(a);
    const liNew = this.createElement('li');
    ulProjects.appendChild(liNew);
    const ap = this.createElement('a');
    ap.innerText = 'new project';
    ap.href = '#';
    liNew.appendChild(ap);

    this.createDialog();
    ap.addEventListener('click', () => {
      document.querySelector('dialog').showModal();
    });
  }
  createDialog() {
    const dialog = this.createElement('dialog');
    const form = this.createElement('form');
    dialog.appendChild(form);
    const inputText = this.createElement('input', 'text', 'project');
    inputText.setAttribute('type', 'text');
    form.appendChild(inputText);
    const button = this.createElement('input');
    button.setAttribute('type', 'button');
    button.value = 'add';
    button.id = 'add-project';
    form.appendChild(button);
    document.body.appendChild(dialog);
  }

  initContent(todos) {
    const container = this.createElement('div');
    const wrapper = this.createElement('div');
    container.id = 'todo-container';
    wrapper.id = 'input';
    this.content.appendChild(container);
    this.content.appendChild(wrapper);
    todos.forEach(todo => {
      const todoDiv = this.objectToDiv(todo);
      todoDiv.addEventListener('click', event => {
        this.divClick(event);
      });
      this.appendTodo(todoDiv);
    });
    this.inputWrapper();
  }
  inputWrapper() {
    const input = document.getElementById('input');
    const textfield = this.createElement('input', 'text', 'todo');
    const inputDate = this.createElement('input', 'date', 'todo');
    const button = this.createElement('input');
    textfield.setAttribute('type', 'text');
    inputDate.setAttribute('type', 'date');
    const date = format(new Date(), 'yyyy-MM-dd');
    inputDate.min = date;
    inputDate.innerText = 'Due';
    button.setAttribute('type', 'button');
    button.value = 'add';
    button.id = 'add-todo';
    input.appendChild(textfield);
    input.appendChild(inputDate);
    input.appendChild(button);
  }
  objectToDiv(object) {
    // perhaps add what to check in the if statement
    const divWrapper = this.createElement('div');
    divWrapper.classList.add('todo');
    for (const [key, value] of Object.entries(object)) {
      if (key === 'id') divWrapper.dataset.id = value;
      if (key === 'title' || key === '_dueDate' || key === 'completedBool') {
        divWrapper.appendChild(this._objectSorter(key, value));
      }
    }
    return divWrapper;
  }
  // Clicking a todo adds the clicked class.
  // this expands the div, exposing more options like edit and move to another project
  divClick(event) {
    if (!event.currentTarget.closest('.todo').classList.contains('clicked')) {
      event.currentTarget.classList.add('clicked');
    } else {
      event.currentTarget.classList.remove('clicked');
    }
    // if (!event.target.closest('.todo').classList.contains('clicked')){
    //   event.target.classList.add('clicked')
    // }
  }
  // Returns the keyParser.
  // The keyparser sorts out what element to create when a new todo is added
  _objectSorter(key, value) {
    const keyParser = {
      title: value => {
        const div = this.createElement('div');
        div.classList.add('title');
        div.innerText = value;
        return div;
      },
      _dueDate: value => {
        const div = this.createElement('div');
        div.classList.add('duedate');
        div.innerText = format(value, 'yyyy-MM-dd');
        return div;
      },
      completedBool: value => {
        const div = this.createElement('div');
        const checkbox = this.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        value ? (checkbox.checked = true) : (checkbox.checked = false);
        div.appendChild(checkbox);
        div.classList.add('completed');
        return div;
      },
    };
    return keyParser[key] ? keyParser[key](value) : false;
  }
  // Called from controller
  bindAddTodo(callback) {
    // add enter functionallity
    // https://stackoverflow.com/questions/51791167/combining-mouse-click-and-enter-key-press-in-the-same-event-listener
    document.body.addEventListener('click', event => {
      if (event.target.id === 'add-todo') {
        this.addTodo(callback);
      }
    });
  }
  // Called from controller
  bindAddProject(callback) {
    document.body.addEventListener('click', event => {
      if (event.target.id === 'add-project') {
        this.addProject(callback);
      }
    });
  }
  // Called from controller
  bindSwitchComplete(callback) {
    document.body.addEventListener('click', event => {
      if (event.target.type === 'checkbox') {
        const todoId = event.target.closest('.todo').dataset.id;
        callback(todoId);
      }
    });
  }
  fillWithInbox(callback) {
    const div = document.getElementById('fill');
    const dataFromModel = callback();
    let todo;
    dataFromModel.forEach(data => {
      for (const [key, value] of Object.entries(data)) {
        todo += `${key} ${value}`;
      }
      todo += '\n';
    });
    div.innerText = todo;
  }
  appendTodo(todoDiv) {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.appendChild(todoDiv);
  }
  addTodo(callback) {
    const dataFromText = document.querySelector('.text.todo').value;
    if (dataFromText === '') return;
    const date = document.querySelector('.date.todo').value;
    const check = () => {
      if (date !== '') {
        return callback(dataFromText, date);
      } else {
        return callback(dataFromText);
      }
    };
    // console.log(date.value);
    const newTodo = check();
    const todoDiv = this.objectToDiv(newTodo);
    this.appendTodo(todoDiv);
    todoDiv.addEventListener('click', event => {
      // event.currentTarget.classList.add('clicked')
      this.divClick(event);
    });
    this._resetInput();
  }
  addProject(callback) {
    const dataFromText = document.querySelector('.text.project').value;
    if (dataFromText === '') return;
    const newProject = callback(dataFromText);
    console.log(newProject);
    // return?
  }
  _resetInput() {
    const textInput = document.querySelector('.text.todo');
    const dateInput = document.querySelector('.date.todo');
    dateInput.value = '';
    textInput.value = '';
  }
}
