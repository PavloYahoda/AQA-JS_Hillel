function divide(numerator, denominator){
  if (isNaN(numerator) || isNaN(denominator)){
    throw new Error("Numerator or denominator is not a number!");
  }

  if (denominator === 0){
    throw new Error("Divide by zero!");
  }
  
  return console.log((numerator/denominator).toFixed(2));
}

try {
  divide("www", 8);
} catch (error) {
  console.error(error.message);
}finally{
  console.log("Completed successfully!");
}

try {
  divide(5.23, 0);
} catch (error) {
  console.error(error.message);
}finally{
  console.log("Completed successfully!");
}

try {
  divide(5.23, 8);
} catch (error) {
  console.error(error.message);
}finally{
  console.log("Completed successfully!");
}