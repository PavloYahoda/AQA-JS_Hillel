function countdown(n) {
    if (n < 0) {
        return; 
    }
    
    console.log(n); 
    countdown(n - 1);
}

function callCoutdownForArray(...numbers){
    numbers.forEach(num => {
        countdown(num);
        console.log("************");
    });
}

callCoutdownForArray(5, 3, 8);