import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerText = 'Hello';
  return element;
}

document.body.appendChild(component());