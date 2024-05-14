const { findPoisonedDuration } = require("./teemo");

test("should return 4 when timeSeries = [1,4] and duration = 2", () => {
  let timeSeries = [1, 4];
  let duration = 2;

  let result = findPoisonedDuration(timeSeries, duration);

  expect(result).toBe(4);
});

test("should return 3 when timeSeries = [1,2] and duration = 3", () => {
  let timeSeries = [1, 2];
  let duration = 2;

  let result = findPoisonedDuration(timeSeries, duration);

  expect(result).toBe(3);
});

test("should return 17 when timeSeries = [1,3,5,7,9,11,13,15] and duration = 3", () => {
  let timeSeries = [1, 3, 5, 7, 9, 11, 13, 15];
  let duration = 3;

  let result = findPoisonedDuration(timeSeries, duration);

  expect(result).toBe(17);
});
