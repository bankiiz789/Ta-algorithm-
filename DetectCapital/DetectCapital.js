exports.detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }
  if (word.length == 1) {
    return true;
  }
  let firstLetter = word.charAt(0);
  let str = word.slice(1);

  if (firstLetter !== word.charAt(0).toUpperCase()) {
    return false;
  } else if (str !== str.toLowerCase()) {
    return false;
  } else {
    return true;
  }
};
