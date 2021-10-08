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
  // const ddmmyy = date.day + date.month + date.year.slice(-2);
  // const mmddyy = date.month + date.day + date.year.slice(-2);
  // const yymmdd = date.year.slice(-2) + date.month + date.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd];
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  let day = Number(date.day);
  let month = Number(date.month);
  let year = Number(date.year);

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    //if month is febrauary
    if (isLeapYear(year)) {
      // if year is leap year
      if (day < 29) {
        day++;
      } else {
        day = 1;
        month++;
      }
    } else {
      //not leap year
      if (day < daysInMonth[month - 1]) {
        day++;
      } else {
        day = 1;
        month++;
      }
    }
  } else {
    if (day < daysInMonth[month - 1]) {
      day++;
    } else {
      day = 1;
      month++;
    }

    if (month > 12) {
      day = 1;
      month = 1;
      year++;
    }
  }
  day = day < 10 ? '0' + String(day) : String(day);
  month = month < 10 ? '0' + String(month) : String(month);
  year = String(year);
  return { day, month, year };
}

function isDatePalindrom(date) {
  const dateFormats = getAllDateFormats(date);
  for (i of dateFormats) {
    if (isPalindrom(i)) {
      return true;
    }
  }
}

function getNextPalindromDate(date) {
  let nextDate = getNextDate(date);
  let cnt = 1;
  while (1) {
    if (isDatePalindrom(nextDate)) {
      return [nextDate, cnt];
    } else {
      cnt++;
      nextDate = getNextDate(nextDate);
    }
  }
}

const date = {};

// console.log(isDatePalindrom(date));
/*element selector*/
const bdayInput = document.querySelector('#bday-input');
const showBtn = document.querySelector('#show-btn');
const showOutput = document.querySelector('#result');

function btnHandler() {
  const userInput = bdayInput.value.split('-');
  date.day = userInput[2];
  date.month = userInput[1];
  date.year = userInput[0];
  if (isDatePalindrom(date)) {
    showOutput.innerText = `Yah date is palindrom 🤩 ${date.day}-${date.month}-${date.year}`;
  } else {
    [nextDate, count] = getNextPalindromDate(date);
    showOutput.innerText = `Next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} ${count} days away`;
  }
}

showBtn.addEventListener('click', btnHandler);
