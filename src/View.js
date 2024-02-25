import './style.css';

export default class View {
  constructor() {
    this.content = document.getElementById('content');
    this.sidebar = document.getElementById('sidebar');
    // maybe you don't need to run init in constructor? have the controller call init with
    // the placeholder todo's
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
    todos.forEach(todo => {
      container.appendChild(this.objectToDiv(todo));
    });
    this.content.appendChild(container);
    this.content.appendChild(wrapper);

    // const text = this.createElement('input', 'text');
    // text.type = 'text';
    // this.content.appendChild(text);
    // const button = this.createElement('button', 'todo');
    // button.textContent = 'Add todo';
    // this.content.appendChild(button);
    // const button2 = this.createElement('button', 'inbox');
    // button2.textContent = 'Get inbox';
    // this.content.appendChild(button2);
    // const div = this.createElement('div');
    // div.id = 'fill';
    // this.content.appendChild(div);
  }
  objectToDiv(object) {
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

  buttonFunction(callback) {
    const dataFromText = document.querySelector('.text').value;
    const div = document.getElementById('fill');
    const newData = callback(dataFromText);
    console.log(newData);
    console.log(JSON.stringify(newData, null, '\t'));
    div.innerText = JSON.stringify(newData, null, '\t');
    // this.controller.handleAddUser(dataFromText);
  }
}
