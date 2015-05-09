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
function reset(doNotConfirm) {
  if(!doNotConfirm) {
    if(!confirm("Are you sure?")) {
      return;
    }
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
function resetTable(doNotConfirm) {
  if(!doNotConfirm) {
    if(!confirm("Are you sure you want to reset the table?")) {
      return;
    }
  }
  timeList.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Started Generation</th><th>Stopped Generation</th><th>Number Generated</th><th>Time elapsed (ms)</th></tr>";
  currentTestNumber = 1;
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
        reset(false);
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
    case 84:
      if(modifierKeyStatus.command) {
        return;
      }
      else {
        tableSortToggle();
      }
    case 65:
      if(modifierKeyStatus.command) {
        return;
      }
      else {
        runCustomTest();
      }
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

//Table sorting
tableSortButton = document.getElementById("sort");
tableSortButton.addEventListener("click", tableSortToggle);
function tableSortToggle() {
  if(!sortClicked) {
    tableSortButton.innerHTML = 'Table Sorting Options<div class="sortMenuEndLine"></div><span id="number" class="sortOption">By Test Number</span><div class="sortMenuEndLine"></div><span id="method" class="sortOption">By Method</span><div class="sortMenuEndLine"></div><span id="time" class="sortOption">By Time</span><div class="sortMenuEndLine"></div><span id="noMoreSort" class="sortOption">Undo Sorting</span></div>';
    sortClicked = true;
    document.getElementById("number").addEventListener("click", sortByTestNumber);
    document.getElementById("method").addEventListener("click", sortByMethod);
    document.getElementById("time").addEventListener("click", sortByTime);
    document.getElementById("noMoreSort").addEventListener("click", sortByTestNumber);
  }
  else {
    tableSortButton.innerHTML = 'Table Sorting Options';
    sortClicked = false;
  }
}
var sortClicked = false;
function getRowsFormattedToSort() {
  mainString = table.innerHTML;
  mainArray = mainString.split("</tbody>");
  for(i=1; i<mainArray.length; i++) {
    mainArray[i] = mainArray[i].split("</td>");
  }
  for(i=1; i<mainArray.length; i++) {
    for(j=0; j<mainArray[i].length-1; j++) {
      length = mainArray[i][j].length;
      tempString = mainArray[i][j];
      if(j == 0) {
        mainArray[i][j] = tempString.slice(15, length);
      }
      else {
        mainArray[i][j] = tempString.slice(4, length);
      }
    }
    mainArray[i] = mainArray[i].slice(0, mainArray[i].length-1);
  }
  //At this point, mainArray[i] represents an individual test
  //mainArray[i][j] represents the data of the table cells, from left to right
  //There are still some misc bits in there to get rid of
  mainArray = mainArray.slice(1, mainArray.length - 1);
  //At last, everything is formatted in pure numerical values, and the html code is gone.
  return mainArray;
}
function sortByTestNumber() {
  data = getRowsFormattedToSort();
  table.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Started Generation</th><th>Stopped Generation</th><th>Number Generated</th><th>Time elapsed (ms)</th></tr>";
  testList = [];
  keyList = [];
  for(i=0; i<data.length; i++) {
    testList[i] = data[i][0];
    keyList[i] = i;
  }
  unsplit = mySort(testList, keyList);
  for(i=0; i<unsplit.length; i++) {
    testList[i] = unsplit[i][0];
    keyList[i] = unsplit[i][1];
  }
  for(i=0; i<keyList.length; i++) {
    tableElement1 = String(data[keyList[i]][0]);
    tableElement2 = String(data[keyList[i]][1]);
    tableElement3 = String(data[keyList[i]][2]);
    tableElement4 = String(data[keyList[i]][3]);
    tableElement5 = String(data[keyList[i]][4]);
    tableElement6 = String(data[keyList[i]][5]);
    rowString = "<tr><td>" + tableElement1 + "</td><td>" + tableElement2 + "</td><td>" + tableElement3 + "</td><td>" + tableElement4 + "</td><td>" + tableElement5 + "</td><td>" + tableElement6 + "</td></tr>";
    allString = table.innerHTML + rowString;
    table.innerHTML = allString;
  }
}
function sortByMethod() {
  data = getRowsFormattedToSort();
  table.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Started Generation</th><th>Stopped Generation</th><th>Number Generated</th><th>Time elapsed (ms)</th></tr>";
  testList = [];
  keyList = [];
  for(i=0; i<data.length; i++) {
    testList[i] = data[i][1];
    keyList[i] = i;
  }
  unsplit = mySort(testList, keyList);
  for(i=0; i<unsplit.length; i++) {
    testList[i] = unsplit[i][0];
    keyList[i] = unsplit[i][1];
  }
  for(i=0; i<keyList.length; i++) {
    tableElement1 = String(data[keyList[i]][0]);
    tableElement2 = String(data[keyList[i]][1]);
    tableElement3 = String(data[keyList[i]][2]);
    tableElement4 = String(data[keyList[i]][3]);
    tableElement5 = String(data[keyList[i]][4]);
    tableElement6 = String(data[keyList[i]][5]);
    rowString = "<tr><td>" + tableElement1 + "</td><td>" + tableElement2 + "</td><td>" + tableElement3 + "</td><td>" + tableElement4 + "</td><td>" + tableElement5 + "</td><td>" + tableElement6 + "</td></tr>";
    allString = table.innerHTML + rowString;
    table.innerHTML = allString;
  }
}
function sortByTime() {
  data = getRowsFormattedToSort();
  table.innerHTML = "<tr><th>Test Number</th><th>Method</th><th>Started Generation</th><th>Stopped Generation</th><th>Number Generated</th><th>Time elapsed (ms)</th></tr>";
  testList = [];
  keyList = [];
  for(i=0; i<data.length; i++) {
    testList[i] = data[i][5];
    keyList[i] = i;
  }
  unsplit = mySort(testList, keyList);
  for(i=0; i<unsplit.length; i++) {
    testList[i] = unsplit[i][0];
    keyList[i] = unsplit[i][1];
  }
  for(i=0; i<keyList.length; i++) {
    tableElement1 = String(data[keyList[i]][0]);
    tableElement2 = String(data[keyList[i]][1]);
    tableElement3 = String(data[keyList[i]][2]);
    tableElement4 = String(data[keyList[i]][3]);
    tableElement5 = String(data[keyList[i]][4]);
    tableElement6 = String(data[keyList[i]][5]);
    rowString = "<tr><td>" + tableElement1 + "</td><td>" + tableElement2 + "</td><td>" + tableElement3 + "</td><td>" + tableElement4 + "</td><td>" + tableElement5 + "</td><td>" + tableElement6 + "</td></tr>";
    allString = table.innerHTML + rowString;
    table.innerHTML = allString;
  }
}
function mySort(test, key) {
  doubleArray = [];
  for(i=0; i<test.length; i++) {
    doubleArray[i] = [test[i], key[i]];
  }
  doubleArray.sort(function(a, b) {
    return a[0] - b[0];
  });
  return doubleArray;
}

//Custom Test
customTest = document.getElementById("custom");
customTest.addEventListener("click", runCustomTest);
function runCustomTest() {
  input = prompt("").split(".");
  //Format:
  //[m11, m12, m12num, m13, m13num, m21, m22, m22num, m23, m23num, m31, m32, m32num, m33, m33num, resetTable]
  for(i=0; i<input.length; i++) {
    input[i] = Number(input[i]);
  }
  if(input[15] == 1) {
    resetTable(true);
  }
  for(n=0; n<input[0]; n++) {
    reset(true);
    m11();
  }
  for(n=0; n<input[1]; n++) {
    reset(true);
    num = input[2]
    currentMethod = 1;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
  for(n=0; n<input[3]; n++) {
    reset(true);
    maxNum = input[4];
    currentMethod = 1;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
  for(n=0; n<input[5]; n++) {
    reset(true);
    m21();
  }
  for(n=0; n<input[6]; n++) {
    reset(false);
    num = input[7];
    currentMethod = 2;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
  for(n=0; n<input[8]; n++) {
    reset(true);
    maxNum = input[9];
    currentMethod = 2;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
  for(n=0; n<input[10]; n++) {
    reset(true);
    m31();
  }
  for(n=0; n<input[11]; n++) {
    reset(true);
    num = input[12];
    currentMethod = 3;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
  for(n=0; n<input[13]; n++) {
    reset(true);
    maxNum = input[14];
    currentMethod = 3;
    startedGeneration = primes.length;
    methodStartTime = getCurrentDate();
    methodStartMs = methodStartTime[7];
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
}
