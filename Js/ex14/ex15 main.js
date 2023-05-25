function performOperations(num1, num2) {
  var addition = num1 + num2;
  var subtraction = num1 - num2;
  var multiplication = num1 * num2;

  if (addition < 0 || subtraction < 0 || multiplication < 0) {
    console.log("Result is invalid");
  } else {
    console.log("The result of addition is " + addition);
    console.log("The result of subtraction is " + subtraction);
    console.log("The result of multiplication is " + multiplication);
  }
}
