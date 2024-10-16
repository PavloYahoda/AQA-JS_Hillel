//function declaration
export function calculateRectangleArea(width, height){
  return width * height;
}

//function expression
let rectangleArea = function (width, height) {
  return width * height;
}

//arrow function
let rectangleArea2 = (width, height) => width * height;


console.log("function declaration: ", calculateRectangleArea(5, 10));
console.log("function expression: ", rectangleArea(6, 11));
console.log("arrow function: ", rectangleArea2(7, 12));
