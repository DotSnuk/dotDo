import './style.css';

export default class View {
  constructor() {
    this.content = document.getElementById('content');
    this.sidebar = document.getElementById('sidebar');
  }
  init(todos) {
    this.initSidebar();
    this.initContent(todos);
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
  initSidebar() {
    const ul = this.createElement('ul');
    this.sidebar.appendChild(ul);
    for (let i = 0; i < 2; i++) {
      const li = this.createElement('li');
      ul.appendChild(li);
      const a = this.createElement('a');
      a.href = '#';
      if (i === 0) {
        a.innerText = 'Inbox';
      } else {
        a.innerText = 'Projects';
      }
      li.appendChild(a);
    }
  }
  initContent(todos) {
    const container = this.createElement('div');
    const wrapper = this.createElement('div');
    container.id = 'todo-container';
    wrapper.id = 'input';
    this.content.appendChild(container);
    this.content.appendChild(wrapper);
    todos.forEach(todo => {
      this.appendTodo(this.objectToDiv(todo));
    });
    this.inputWrapper();
  }

  inputWrapper() {
    const input = document.getElementById('input');
    const textfield = this.createElement('input', 'text', 'todo');
    const button = this.createElement('input');
    textfield.setAttribute('type', 'text');
    button.setAttribute('type', 'button');
    button.value = 'add';
    button.id = 'add-todo';
    input.appendChild(textfield);
    input.appendChild(button);
  }
  objectToDiv(object) {
    // perhaps add what to check in the if statement
    const divWrapper = this.createElement('div');
    divWrapper.classList.add('todo');
    for (const [key, value] of Object.entries(object)) {
      if (key === '_title' || key === 'completedBool') {
        divWrapper.appendChild(this._objectSorter(key, value));
      }
    }
    return divWrapper;
  }
  _objectSorter(key, value) {
    const keyParser = {
      _title: value => {
        const div = this.createElement('div');
        div.classList.add('title');
        div.innerText = value;
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
  bindAddTodo(callback) {
    document.body.addEventListener('click', event => {
      if (event.target.id === 'add-todo') {
        this.addTodo(callback);
      }
    });
  }
  bindGetInbox(callback) {
    document.body.addEventListener('click', event => {
      if (
        event.target.tagName === 'BUTTON' &&
        event.target.classList.contains('inbox')
      ) {
        this.fillWithInbox(callback);
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
    const newTodo = callback(dataFromText);
    this.appendTodo(this.objectToDiv(newTodo));
    // const div = document.getElementById('fill');
    // const newData = callback(dataFromText);
    // console.log(newData);
    // console.log(JSON.stringify(newData, null, '\t'));
    // div.innerText = JSON.stringify(newData, null, '\t');
    // this.controller.handleAddUser(dataFromText);
  }
}
