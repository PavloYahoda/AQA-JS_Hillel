import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an integer: ', (value) => {
  const num = Number(value);

  handleNum(num, printIfEven, printIfOdd);

  rl.close();
});

function handleNum (number, callbackForEven, callbackForOdd){
  if (isNaN(number)) {
    console.log(`It is not a number. Enter a number, please.`);
    return;
  }  
  if (!Number.isInteger(number)) {
    console.log(`It is not an integer. Enter an integer, please.`);
    return;
  }
  if(number%2 === 0){
    callbackForEven(number);
    return;
  }
  if(number%2 !== 0){
    callbackForOdd(number);
    return;
  }
}

const printIfEven = (number) => console.log(`${number} is even`);

const printIfOdd = (number) => console.log(`${number} is odd`);


