exports.fizzBuzz = function (n) {
  let stack = [];
  for (let i = 1; i <= n; i++) {
    stack.push(i);
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 3 === 0 && stack[i] % 5 === 0) {
      stack[i] = "FizzBuzz";
    } else if (stack[i] % 5 === 0) {
      stack[i] = "Buzz";
    } else if (stack[i] % 3 === 0) {
      stack[i] = "Fizz";
    } else {
      stack[i] += "";
    }
  }

  return stack;
};
