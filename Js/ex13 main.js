function checkNumbers(a, b) {
  return a === 20 || b === 20 || (a + b) <= 20;
}

console.log(checkNumbers(10, 5)); // true
console.log(checkNumbers(20, 5)); // true
console.log(checkNumbers(10, 15)); // false
