const add = function(num1,num2) {
  let add = num1 + num2
  return add;
};

const subtract = function(num1,num2) {
	let sub = num1 - num2
  return sub;
};

const sum = function(num1) {
  let sum = 0
  num1.forEach(index => {
    sum += index
  });
  return sum;
};

const multiply = function(num1) {
  let multi = 1
  num1.forEach(index => {
    multi *= index
  });
  return multi;
};

const power = function(num1,num2) {
	let power = num1 ** num2
  return power;
};

const factorial = function(num1) {
  let num = 1
	if(num1 > 0){
    while(num1 > 0){
      num *= num1
      num1--
    }
  }else{
    num = 1
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
