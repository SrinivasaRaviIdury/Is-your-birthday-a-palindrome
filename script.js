function reverseStr(str) {
  var listOfChars = str.split('');
  var reverseListOfChars = listOfChars.reverse();
  var reverseStr = reverseListOfChars.join('');
  return reverseStr;
}

function isPalindrom(str) {
  var reverse = reverseStr(str);
  return reverse === str;
}

function convertDateToStr(date) {
  var dateStr = { day: '', month: '', year: '' };
  if (date.day < 10) {
    dateStr.day = '0' + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = '0' + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();

  return dateStr;
}

function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindrom(date) {
  var dateArr = getAllDateFormats(date);
  for (date of dateArr) {
    return isPalindrom(date);
  }
}
var date = {
  day: 11,
  month: 06,
  year: 1994,
};
console.log(checkPalindrom(date));
