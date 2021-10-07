function log(statement) {
  return console.log(statement);
}
function reverseStr(str) {
  return str.split('').reverse().join('');
}

function isPalindrom(str) {
  const reversedStr = reverseStr(str);
  if (reversedStr === str) {
    return true;
  } else {
    return false;
  }
}

function getAllDateFormats(date) {
  const ddmmyyyy = date.day + date.month + date.year;
  const mmddyyyy = date.month + date.day + date.year;
  const yyyymmdd = date.year + date.month + date.day;
  const ddmmyy = date.day + date.month + date.year.slice(-2);
  const mmddyy = date.month + date.day + date.year.slice(-2);
  const yymmdd = date.year.slice(-2) + date.month + date.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function isDatePalindrom(date) {
  const dateFormats = getAllDateFormats(date);
  for (i of dateFormats) {
    if (isPalindrom(i)) {
      return `Yah date is palindrom ✨🎉 ${i}`;
    }
  }
  return 'Nah date is not a palindrom 😏';
}

const date = {
  day: '',
  month: '',
  year: '',
};
const bdayInput = document.querySelector('#bday-input');
const showBtn = document.querySelector('#show-btn');
const showOutput = document.querySelector('#result');
function btnHandler(e) {
  const userInput = bdayInput.value.split('-');
  date.day = userInput[2];
  date.month = userInput[1];
  date.year = userInput[0];
  showOutput.innerText = isDatePalindrom(date);
}

showBtn.addEventListener('click', btnHandler);
