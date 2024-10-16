function checkAge(){
    for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] >= 18){
            console.log("Congratulations, you сan buy some drink");
        }else{
            console.log("Sorry, but you should go to bed");
        }
        
	}
}

checkAge(10, 18, 25);