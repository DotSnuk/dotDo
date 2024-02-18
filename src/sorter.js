export function sortDueDate(datesList) {
  return datesList.sort((a, b) => a.dueDate - b.dueDate);
}
