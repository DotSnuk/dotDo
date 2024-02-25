import './style.css';

export default class View {
  constructor() {
    this.content = document.getElementById('content');
    this.sidebar = document.getElementById('sidebar');
    this.init();
  }
  init() {
    this.initSidebar();
    this.initContent();
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
    const li = this.createElement('li');
    li.innerText = 'inbox';
    ul.appendChild(li);
  }
  initContent() {
    const text = this.createElement('input', 'text');
    text.type = 'text';
    this.content.appendChild(text);
    const button = this.createElement('button', 'todo');
    button.textContent = 'Add todo';
    this.content.appendChild(button);
    const button2 = this.createElement('button', 'inbox');
    button2.textContent = 'Get inbox';
    this.content.appendChild(button2);
    const div = this.createElement('div');
    div.id = 'fill';
    this.content.appendChild(div);
  }
  bindAddTodo(callback) {
    document.body.addEventListener('click', event => {
      if (event.target.classList.contains('todo')) {
        this.buttonFunction(callback);
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
    div.innerText = JSON.stringify(callback(), null, '\t');
  }

  buttonFunction(callback) {
    const dataFromText = document.querySelector('.text').value;
    const div = document.getElementById('fill');
    const newData = callback(dataFromText);
    console.log(newData);
    console.log(JSON.stringify(newData, null, '\t'));
    div.innerText = JSON.stringify(newData, null, '\t');
    // this.controller.handleAddUser(dataFromText);
  }
  // initUser() {
  //   console.log('Enter your username: ');
  //   return prompt('username');
  // }
}
