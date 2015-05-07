primes = [2, 3, 5, 7];
primeList = document.getElementById("primeList");
primeList.innerHTML = primes.join(", ");
currentPrime = document.getElementById("prime");
currentPrime.innerHTML = primes.length;

var methodStartTime;
var methodEndTime;
var methodStartMs;
var MethodEndMs;

//Method 1:
document.getElementById("m11").addEventListener("click", function() {
  methodStartTime = getCurrentDate();
  m1NextPrime();
  methodEndTime = getCurrentDate();
});
document.getElementById("m12").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m1NextPrime();
  }
  methodEndTime = getCurrentDate();
});
document.getElementById("m13").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m1NextPrime();
  }
  methodEndTime = getCurrentDate();
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
  m2NextPrime();
  methodEndTime = getCurrentDate();
});
document.getElementById("m22").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m2NextPrime();
  }
  methodEndTime = getCurrentDate();
});
document.getElementById("m23").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m2NextPrime();
  }
  methodEndTime = getCurrentDate();
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
  m3NextPrime();
  methodEndTime = getCurrentDate();
});
document.getElementById("m32").addEventListener("click", function() {
  num = prompt("How many primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(num)) {
    return;
  }
  for(j=0; j<num; j++) {
    m3NextPrime();
  }
  methodEndTime = getCurrentDate();
});
document.getElementById("m33").addEventListener("click", function() {
  maxNum = prompt("Up to what number of primes would you like to generate?");
  methodStartTime = getCurrentDate();
  if(isNaN(maxNum)) {
    return;
  }
  currentNum = currentPrime.innerHTML;
  num = maxNum - currentNum;
  for(j=0; j<num; j++) {
    m3NextPrime();
  }
  methodEndTime = getCurrentDate();
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

//Reset button
document.getElementById("reset").addEventListener("click", function() {
  primes = [2, 3, 5, 7];
  primeList.innerHTML = primes.join(", ");
  currentPrime.innerHTML = primes.length;
});

function getCurrentDate() {
  //Date array structure:
  //[month, day, year, hour, minute, second, millisecond]

  //Raw:
  obj = new Date();
  month = obj.getMonth();
  day = obj.getDate();
  year = obj.getFullYear();
  hour = obj.getHours();
  minute = obj.getMinutes();
  second = obj.getSeconds();
  millisecond = obj.getMilliseconds();
  month++;
  dateArray = [month, day, year, hour, minute, second, millisecond];
  return dateArray;
}
