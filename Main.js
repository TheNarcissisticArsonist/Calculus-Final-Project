primes = [2, 3, 5, 7];
primeList = document.getElementById("primeList");
primeList.innerHTML = primes.join(", ");
currentPrime = document.getElementById("prime");
currentPrime.innerHTML = primes.length;

var methodStartTime;
var methodEndTime;
var methodStartMs;
var MethodEndMs;

pageStart = document.getElementById("start");
pageEnd = document.getElementById("end");
pageTime = document.getElementById("elapsed");

table = document.getElementById("timeList");

//Method 1:
document.getElementById("m11").addEventListener("click", function() {
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m1NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
});
document.getElementById("m12").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
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
});
document.getElementById("m13").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
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
});
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
document.getElementById("m21").addEventListener("click", function() {
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m2NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
});
document.getElementById("m22").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
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
});
document.getElementById("m23").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
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
});
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
document.getElementById("m31").addEventListener("click", function() {
  methodStartTime = getCurrentDate();
  methodStartMs = methodStartTime[7];
  m3NextPrime();
  methodEndTime = getCurrentDate();
  methodEndMs = methodEndTime[7];
  timeElapsed = methodEndMs - methodStartMs;
  pageStart.innerHTML = formatDateToString(methodStartTime);
  pageEnd.innerHTML = formatDateToString(methodEndTime);
  pageTime.innerHTML = String(timeElapsed) + " milliseconds";
});
document.getElementById("m32").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
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
});
document.getElementById("m33").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
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
});
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
document.getElementById("reset").addEventListener("click", function() {
  if(!confirm("Are you sure?")) {
    return;
  }
  primes = [2, 3, 5, 7];
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
  pageStart.innerHTML = "00/00/0000 at 00:00:00.000";
  pageEnd.innerHTML = "00/00/0000 at 00:00:00.000";
  pageTime.innerHTML = "0 milliseconds";
});

//Reset table button:
document.getElementById("resetTable").addEventListener("click", function() {
  if(!confirm("Are you sure you want to reset the table?")) {
    return;
  }
  timeList.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Number Start Generation</th><th>Number End Generation</th><th>Time elapsed (ms)</th></tr>";
});

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
