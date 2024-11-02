function printWithDelay(textForPrint, delay){
    setTimeout(() => console.log(textForPrint), delay);
}

printWithDelay("Hello everyone!", 2000);