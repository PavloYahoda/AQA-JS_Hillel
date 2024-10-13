import readline from 'readline';
import { printAverageGrade } from './data.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть середній бал: ', (value) => {
  const averageGrade = parseFloat(value);
  
  printAverageGrade(value);
  
  rl.close();
});