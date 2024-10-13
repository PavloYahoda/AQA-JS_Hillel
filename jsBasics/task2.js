import {averageGrade} from './data.js';

export function printAverageGrade(value){
    switch(true){
        case(value == null || isNaN(value) || value < 0 || value > 100):
            console.log(`Не корректне значення: ${value}. Допустимий інтервал - числа від 0 до 100`);
            break;
        case(value >= 0 && value < 60):
            console.log(`Якщо середній бал становить ${value}, то оцінка "Незадовільно"`);
            break; 
        case(value >= 60 && value <= 70):
            console.log(`Якщо середній бал становить ${value}, то оцінка "Задовільно"`);
            break;
        case(value >= 71 && value <= 80):
            console.log(`Якщо середній бал становить ${value}, то оцінка "Добре"`);
            break;
        case(value >= 81 && value <= 90):
            console.log(`Якщо середній бал становить ${value}, то оцінка "Дуже добре"`);
            break;
        case(value >= 91 && value <= 100):
            console.log(`Якщо середній бал становить ${value}, то оцінка "Відмінно"`);
            break;
    }
}

for (const avg of averageGrade){
    printAverageGrade(avg);
}