// Write a function isEven() which takes a single numeric argument and returns true if the number is even and false otherwise
function isEven(number) {
  if (number % 2 === 0) {
      return true;
  }else {
    return false;
  }

}

// function isEven(number){
  // return number % 2 === 0;
// }
// ***************************
// Write a function which takes a single numeric argument and returns the factorial of that number
// eg 4! is 4*3*2*1
// eg 6! is 6*5*4*3*2*1
// 0! is 1

//console.log('Write a function which takes a single numeric argument and returns the factorial of that number');
function factorial(num){
  //define a result variable
  var result = 1;
  // Calculate factorial and store value in result
  for (var i = 1; i < num; i++){
    result = result * i; //result*=i;
  }
  //return the result variable
  return result;
}

// *************************************************
//Write afunction kebabToSnake() which takes a single kebab-cased string argument and return the snake_cased version.
function kebabToSnake(str) {
    var res = str.replace(/-/g,"_");
    return res;
}
