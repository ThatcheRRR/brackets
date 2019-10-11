module.exports = function check(str, bracketsConfig) {
  let brackets = str.split(''),
      leftBr = [],
      rightBr = [];
  if (brackets.length % 2 != 0) {
      return false;
  } else if (brackets.length % 2 == 0) {
  for (let i = 0; i < bracketsConfig.length; i++) {
      leftBr.push(bracketsConfig[i][0]);
      rightBr.push(bracketsConfig[i][1]);
  }
  for (let i = brackets.length - 1; i >= 0; i--) {
      for (let j = 0; j < rightBr.length; j++) {
          if (brackets[i] == leftBr[j] && brackets[i + 1] == rightBr[j]) {
              brackets.splice(i, 2);
          }
      }
  }
  return (brackets.length == 0); 
  }
};