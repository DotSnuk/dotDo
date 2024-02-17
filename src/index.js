import './style.css';
import { format, compareAsc } from 'date-fns';

function component() {
  const element = document.createElement('div');
  element.innerText = 'Hello';
  console.log(format(new Date(2014, 1, 11), 'dd/MM/yyyy'));
  return element;
}

document.body.appendChild(component());
