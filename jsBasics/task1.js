import { averageGrade } from './data.js';

for (const value of averageGrade){
  if (value == null || isNaN(value) || value < 0 || value > 100) {
    console.log(`Не коректне значення: ${value}. Допустимий інтервал - числа від 0 до 100`);
  } else if (value >= 0 && value < 60) {
    console.log(`Якщо середній бал становить ${value}, то оцінка "Незадовільно"`);
  } else if (value >= 60 && value <= 70) {
    console.log(`Якщо середній бал становить ${value}, то оцінка "Задовільно"`);
  } else if (value >= 71 && value <= 80) {
    console.log(`Якщо середній бал становить ${value}, то оцінка "Добре"`);
  } else if (value >= 81 && value <= 90) {
    console.log(`Якщо середній бал становить ${value}, то оцінка "Дуже добре"`);
  } else if (value >= 91 && value <= 100) {
    console.log(`Якщо середній бал становить ${value}, то оцінка "Відмінно"`);
  }
}

