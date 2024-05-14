const { fizzBuzz } = require("./fizzbuzz");

test("should return ['1','2','Fizz'] when n = 3", () => {
  let n = 3;

  let result = fizzBuzz(n);

  expect(result).toEqual(["1", "2", "Fizz"]);
});

test('should return ["1","2","Fizz"] when n = 5', () => {
  let n = 5;

  let result = fizzBuzz(n);

  expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test('should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] when n = 15', () => {
  let n = 15;

  let result = fizzBuzz(n);

  expect(result).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
