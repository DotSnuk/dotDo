export default class View {
  constructor(controller) {
    this.content = document.getElementById('content');
    this.init();
  }
  init() {
    const text = this.createInputText('text');
    const button = this.createButton('Do thing', 'btn');
    const div = this.createDiv('divs');
    this.content.appendChild(text);
    this.content.appendChild(button);
    this.content.appendChild(div);
  }

  update(data, callback) {
    callback(data);
  }
  callbackUpdateUser(data) {
    const div = document.getElementById('divs');
    div.innerText = JSON.stringify(data);
  }
  createButton(value, id) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = value;
    button.id = id;
    button.addEventListener('click', this.buttonFunction);
    return button;
  }
  createInputText(id) {
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.id = id;
    return textField;
  }
  createDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    return div;
  }
  buttonFunction() {
    const dataFromText = document.getElementById('text');

    // this.controller.handleAddUser(dataFromText);
  }
  // initUser() {
  //   console.log('Enter your username: ');
  //   return prompt('username');
  // }
}
