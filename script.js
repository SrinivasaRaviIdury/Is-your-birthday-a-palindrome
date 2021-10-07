function log(statement) {
  return console.log(statement);
}
function reverseStr(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
}

log(reverseStr('hello'));
