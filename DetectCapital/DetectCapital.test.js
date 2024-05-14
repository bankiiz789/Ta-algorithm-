const { detectCapitalUse } = require("./DetectCapital");

test("should return true when call this function and word is USA", () => {
  let word = "USA";

  let result = detectCapitalUse(word);

  expect(result).toBe(true);
});

test("should return true when call this function and word is F", () => {
  let word = "F";

  let result = detectCapitalUse(word);

  expect(result).toBe(true);
});

test("should return false when call this function and word is FlaG", () => {
  let word = "FlaG";

  let result = detectCapitalUse(word);

  expect(result).toBe(false);
});
