export const averageGrade = [0, 10.3, 59, 60, 61, 69.99, 70, 71, 79, 80, 81, 89, 90, 91, 99, 100, 100.009, -2, '@', 'сорок', null, ,undefined];

export function printAverageGrade(value){
    switch(true){
        case(value == null || isNaN(value) || value < 0 || value > 100):
            console.log(`Не корректне значення: ${value}. Допустимий інтервал - числа від 0 до 100`);
            break;
        case(value >= 0 && value < 60):
            console.log("Незадовільно");
            break; 
        case(value >= 60 && value <= 70):
            console.log("Задовільно");
            break;
        case(value >= 71 && value <= 80):
            console.log("Добре");
            break;
        case(value >= 81 && value <= 90):
            console.log("Дуже добре");
            break;
        case(value >= 91 && value <= 100):
            console.log("Відмінно");
            break;
    }
}