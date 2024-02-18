import { format } from 'date-fns';

export default function logMessage(message) {
  console.log(message);
}
export function logDateMessage(date) {
  console.log(format(date, 'dd/MM/yyyy'));
}
