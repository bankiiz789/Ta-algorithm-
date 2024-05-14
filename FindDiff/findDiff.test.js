const { findTheDifference } = require("./findDiff");

test("should be return e when s = abcd , t = abcde", () => {
  let s = "abcd";
  let t = "abcde";

  let result = findTheDifference(s, t);

  expect(result).toBe("e");
});

test("should be return y when s = '' , t = 'y'", () => {
  let s = "";
  let t = "y";

  let result = findTheDifference(s, t);

  expect(result).toBe("y");
});
