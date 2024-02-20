export function sortDueDate(datesList) {
  return datesList.sort((a, b) => a.dueDate - b.dueDate);
}
export function sortByProperty(property) {
  return function (a, b) {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else {
      return 0;
    }
  };
}
