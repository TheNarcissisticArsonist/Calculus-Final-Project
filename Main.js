//Starting stuff
primes = [2, 3, 5, 7];
primeList = document.getElementById("primeList");
primeList.innerHTML = primes.join(", ");
currentPrime = document.getElementById("prime");
currentPrime.innerHTML = primes.length;

//Method 1:
document.getElementById("m11").addEventListener("click", m11);
document.getElementById("m12").addEventListener("click", m12);
document.getElementById("m13").addEventListener("click", m13);
function m11() {
  currentMethod = 1;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m1NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m12() {
  num = prompt("How many primes would you like to generate?");
  currentMethod = 1;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m1NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m13() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  currentMethod = 1;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m1NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m1NextPrime() {
  currentNum = primes[primes.length - 1];
  foundNext = false;
  while(!foundNext) {
    currentNum++;
    broke = false;
    for(i=2; i<currentNum; i++) {
      if(currentNum % i == 0) {
        broke = true;
        break;
      }
    }
    if(!broke) {
      foundNext = true;
      primes.push(currentNum);
    }
  }
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
}

//Method 2:
document.getElementById("m21").addEventListener("click", m21);
document.getElementById("m22").addEventListener("click", m22);
document.getElementById("m23").addEventListener("click", m23);
function m21() {
  currentMethod = 2;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m2NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m22() {
  num = prompt("How many primes would you like to generate?");
  currentMethod = 2;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m2NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m23() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  currentMethod = 2;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m2NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m2NextPrime() {
  currentNum = primes[primes.length - 1];
  foundNext = false;
  while(!foundNext) {
    currentNum++;
    broke = false;
    for(i=0; i<primes.length; i++) {
      if(currentNum % primes[i] == 0) {
        broke = true;
        break;
      }
    }
    if(!broke) {
      foundNext = true;
      primes.push(currentNum);
    }
  }
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
}

//Method 3:
document.getElementById("m31").addEventListener("click", m31);
document.getElementById("m32").addEventListener("click", m32);
document.getElementById("m33").addEventListener("click", m33);
function m31() {
  currentMethod = 3;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m3NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m32() {
  num = prompt("How many primes would you like to generate?");
  currentMethod = 3;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m3NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m33() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  currentMethod = 3;
  startedGeneration = primes.length;
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m3NextPrime();
  }
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
  stoppedGeneration = primes.length;
  numberGenerated = stoppedGeneration - startedGeneration;
  addNextTableRow();
}
function m3NextPrime() {
  currentNum = primes[primes.length - 1];
  foundNext = false;
  while(!foundNext) {
    currentNum++;
    broke = false;
    maxTest = Math.ceil(Math.sqrt(currentNum));
    for(i=0; i<primes.length; i++) {
      if(primes[i] > maxTest) {
        break;
      }
      if(currentNum % primes[i] == 0) {
        broke = true;
        break;
      }
    }
    if(!broke) {
      foundNext = true;
      primes.push(currentNum);
    }
  }
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
}

//Reset button:
document.getElementById("reset").addEventListener("click", reset);
function reset() {
  if(!confirm("Are you sure?")) {
    return;
  }
  primes = [2, 3, 5, 7];
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
  pageStart.innerHTML = "00/00/0000 at 00:00:00.000";
  pageEnd.innerHTML = "00/00/0000 at 00:00:00.000";
  pageTime.innerHTML = "0 milliseconds";
}

//Table stuff:
document.getElementById("resetTable").addEventListener("click", resetTable);
function resetTable() {
  if(!confirm("Are you sure you want to reset the table?")) {
    return;
  }
  timeList.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Started Generation</th><th>Stopped Generation</th><th>Number Generated</th><th>Time elapsed (ms)</th></tr>";
}
function addNextTableRow() {
  tableElement1 = String(currentTestNumber);
  tableElement2 = String(currentMethod);
  tableElement3 = String(startedGeneration);
  tableElement4 = String(stoppedGeneration);
  tableElement5 = String(numberGenerated);
  tableElement6 = String(timeElapsed);
  rowString = "<tr><td>" + tableElement1 + "</td><td>" + tableElement2 + "</td><td>" + tableElement3 + "</td><td>" + tableElement4 + "</td><td>" + tableElement5 + "</td><td>" + tableElement6 + "</td></tr>";
  allString = table.innerHTML + rowString;
  table.innerHTML = allString;
  currentTestNumber++;
}
table = document.getElementById("timeList");
var currentTestNumber = 1;
var currentMethod;
var startedGeneration;
var stoppedGeneration;
var numberGenerated;
var timeElapsed;

//Timing stuff
function getCurrentDate() {
  //Date array structure:
  //[month, day, year, hour, minute, second, millisecond, totalMilliseconds]

  //Raw:
  obj = new Date();
  month = obj.getMonth();
  day = obj.getDate();
  year = obj.getFullYear();
  hour = obj.getHours();
  minute = obj.getMinutes();
  second = obj.getSeconds();
  millisecond = obj.getMilliseconds();
  totalMilliseconds = obj.getTime();
  dateArray = [month, day, year, hour, minute, second, millisecond, totalMilliseconds];
  return dateArray;
}
function formatDateToString(date) {
  month = String(date[0]);
  day = String(date[1]);
  year = String(date[2]);
  minute = String(date[4]);
  second = String(date[5]);
  millisecond = String(date[6]);

  //Format hours and AM/PM
  if(date[3] == 0) {
    hour = "12";
    amPM = "AM";
  }
  else if(date[3] > 0 && date[3] < 11) {
    hour = String(date[3]);
    amPM = "AM";
  }
  else if(date[3] == 11) {
    hour = "12";
    amPM = "PM";
  }
  else if(date[3] > 11) {
    hour = String(date[3] - 12);
    amPM = "PM";
  }

  //Make sure seconds are two digits (because it looks prettier that way)
  if(second.length == 1) {
    second = "0" + second;
  }

  //Make sure milliseconds are three digits (for decimal accuracy)
  if(millisecond.length == 1) {
    millisecond = "00" + millisecond;
  }
  else if(millisecond.length == 2) {
    millisecond = "0" + millisecond;
  }

  dateString = month + "/" + day + "/" + year + " at " + hour + ":" + minute + ":" + second + "." + millisecond + " " + amPM;
  return dateString;
}
var methodStartTime;
var methodEndTime;
var methodStartMs;
var MethodEndMs;
pageStart = document.getElementById("start");
pageEnd = document.getElementById("end");
pageTime = document.getElementById("elapsed");

//Keyboard hotkeys
document.addEventListener("keydown", function(event) {
  switch(event.which) {
    case 16://shift
      modifierKeyStatus.shift = true;
      break;
    case 17://control
      modifierKeyStatus.control = true;
      break;
    case 91://command
      modifierKeyStatus.command = true;
      break;
    case 82://r
      if(modifierKeyStatus.command) {
        return;
      }
      else if(modifierKeyStatus.shift) {
        resetTable();
      }
      else {
        reset();
      }
      break;
    /*shift for method 3, control for method 2, neither for method 1*/
    case 49://1
      if(modifierKeyStatus.command) {
        return;
      }
      else if(modifierKeyStatus.shift) {
        m31();
      }
      else if(modifierKeyStatus.control) {
        m21();
      }
      else {
        m11();
      }
      break;
    case 50://2
      if(modifierKeyStatus.command) {
        return;
      }
      else if(modifierKeyStatus.shift) {
        m32();
      }
      else if(modifierKeyStatus.control) {
        m22();
      }
      else {
        m12();
      }
      break;
    case 51://3
      if(modifierKeyStatus.command) {
        return;
      }
      else if(modifierKeyStatus.shift) {
        m33();
      }
      else if(modifierKeyStatus.control) {
        m23();
      }
      else {
        m13();
      }
      break;
    default:
      return;
      break;
  }
});
document.addEventListener("keyup", function(event) {
  switch(event.which) {
    case 16:
      modifierKeyStatus.shift = false;
      break;
    case 17:
      modifierKeyStatus.control = false;
      break;
    case 91:
      modifierKeyStatus.command = false;
      break;
    default:
      return;
      break;
  }
});
modifierKeyStatus = {
  shift: false,
  control: false,
  command: false
};
