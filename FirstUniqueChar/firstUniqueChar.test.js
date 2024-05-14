const { firstUniqChar } = require("./firstUniqueChar");

test("should return 0 when call function and parameter is leetcode", () => {
  let s = "leetcode";

  const result = firstUniqChar(s);

  expect(result).toBe(0);
});

test("should return -1 when call function and parameter is aabb", () => {
  let s = "aabb";

  const result = firstUniqChar(s);

  expect(result).toBe(-1);
});

test("should return 2 when call function and parameter is loveleetcode", () => {
  let s = "loveleetcode";

  const result = firstUniqChar(s);

  expect(result).toBe(2);
});
