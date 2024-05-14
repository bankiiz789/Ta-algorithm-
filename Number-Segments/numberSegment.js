exports.countSegments = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let str1 = s.trim();
  let str = str1.split(" ");

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "") {
      result.push(str[i]);
    }
  }
  return result.length;
};
