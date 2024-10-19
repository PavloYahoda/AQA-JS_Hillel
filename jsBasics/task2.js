function countdown(n) {
    if (n < 0) {
        return; 
    }
    
    console.log(n); 
    countdown(n - 1);
}

function callCountdownForArray(...numbers){
    numbers.forEach(num => {
        countdown(num);
        console.log("************");
    });
}

callCountdownForArray(5, 3, 8);