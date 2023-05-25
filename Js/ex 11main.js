let str1 = "I love JavaScript";
let str2 = "I'm a great programmer";

function longerString(a, b) {
  return a.length > b.length ? a : b;
}

console.log(longerString(str1, str2));
