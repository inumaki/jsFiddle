let numbers = new Set();

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////
function generateNumbers() {
  numbers.clear();
  let num = document.getElementById("numInput").value;
  if (Number(num) < 1 || Number(num) > 10000) alert("Please Enter In Range");
  var i = 0;
  while (i < num) {
    var value = Math.floor(Math.random() *10000) + 1;
    console.log(value);
    numbers.add(value);
    i = numbers.size;

  }
  numbers.add(17);
  numbers.add(29);
  numbers.add(59);
  let rNumbers = document.getElementById("random");

  rNumbers.innerHTML = "";
  for (let nums of numbers) rNumbers.innerHTML += "<p>" + nums + "</p>";
}
 
//........................................................................................


function listPrimes() {
  if (numbers.size <= 0) {
    alert("Enter Number Properly");
    return;
  }

  let primeList = document.getElementById("primeList");
  primeList.innerHTML = "";
  let primes = new Set();
  let primeCount = 0;
  let minPrime = Number.MAX_SAFE_INTEGER;
  let maxPrime = Number.MIN_SAFE_INTEGER;

  for (let number of numbers) {
    if (isPrime(number)) {
      primes.add(number);
      primeCount++;
      minPrime = Math.min(minPrime, number);
      maxPrime = Math.max(maxPrime, number);
    }
  }

  console.log(primeList);
  for (let prime of primes) {
    primeList.innerHTML += "<div>" + prime + "</div>";
  }
  if (primeCount === 0) {
    minPrime = "NONE";
    maxPrime = "NONE";
  }

  primeList.innerHTML += `<p> Total prime numbers : ${primeCount}</p>`;
  primeList.innerHTML += `<p> Max prime number : ${maxPrime}</p>`;
  primeList.innerHTML += `<p> Min prime number : ${minPrime}</p>`;
}


//........................................................................................