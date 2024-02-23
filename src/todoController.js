import ToDo from './Todo.js';

export function createTodo(title, ...optionalPara) {
  const todo = new ToDo(title);
  if (optionalPara.length !== 0) {
    optionalPara.forEach(para => {
      _sortOptionalPara(todo, para);
    });
  }
  return todo;
}

function _sortOptionalPara(todo, para) {
  // can I break these two up?
  const paraParser = {
    dueDate: value => {
      todo.dueDate = value;
    },
    priority: value => {
      todo.priority = value;
    },
  };
  for (const [key, value] of Object.entries(para)) {
    paraParser[key] ? paraParser[key](value) : logMessage('not in paraParser');
  }
}
