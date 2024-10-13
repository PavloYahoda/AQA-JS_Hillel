import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть ціле число, для якого потрібно вивести таблицю множення: ', (value) => {
  
    const userInput = Number(value);
    
    if (isNaN(userInput)) {
      console.log(`Помилка: "${value}" не є числом. Будь ласка, введіть ціле число.`);
    } else if (!Number.isInteger(userInput)) {
      console.log(`Помилка: "${value}" не є цілим числом. Будь ласка, введіть ціле число.`);
    } else {
      printMultiplicationTable(userInput);
    }  
    
    rl.close();
});

function printMultiplicationTable(value){
    if (value > 0 && value <=5){
        for(let i = 0; i <=10; i++){
            console.log(`${value} x ${i} = ${value * i}`);
        }
    }else{
        let i = 0;
        while(i <= 10){
            console.log(`${value} x ${i} = ${value * i}`);
            i++;
        }
    }
};

