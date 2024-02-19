import ToDo from './todo.js';
import User from './user.js';
import Project from './project.js';

export default function AppLogic(name) {
  const currentUser = new User(name);

  function getUser() {
    console.log(currentUser);
  }
  return { getUser };
}

// export const appLogic = name => {
//   const currentUser = new User(name);
//   const getUser = () => {
//     console.log(currentUser);
//   };
//   return { getUser };
// };

// export default function AppLogic(user) {
//   const currentUser = user;

//   const createTodo = title => {
//     const todo = new ToDo(title);
//     return todo;
//   };
//   return { createTodo };
// }
