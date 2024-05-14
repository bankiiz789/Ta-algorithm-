const { countSegments } = require("./numberSegment");

test("should return 5 when s = 'Hello, my name is John'", () => {
  let s = "Hello, my name is John";

  let result = countSegments(s);

  expect(result).toBe(5);
});

test('should return 1 when s = "hello"', () => {
  let s = "hello";

  let result = countSegments(s);

  expect(result).toBe(1);
});

test("should return 0 when s = '     '", () => {
  let s = "     ";

  let result = countSegments(s);

  expect(result).toBe(0);
});

test('should return 6 when s = ",,,   etc"', () => {
  let s = ", , ,   etc";

  let result = countSegments(s);

  expect(result).toBe(4);
});
