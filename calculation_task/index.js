const process = require("process");
const argvs = process.argv;
const argv = argvs.slice(2);
console.log(argv);
const operation = argv[0];
const operator1 = parseInt(argv[1]);
const operator2 = parseInt(argv[2]);

//To addition process
if (operation === "addition") {
  console.log(
    operation + " of two numbers  " + operator1,
    operator2 + " is " + (operator1 + operator2)
  );
}
if (operation === "subtraction") {
  console.log(operation + " of two numbers  " + (operator1 - operator2));
}
if (operation === "multiplication") {
  console.log(operation + " of two numbers " + operator1 * operator2);
}
if (operation === "division") {
  console.log(
    operation + " of two numbes " + operator1,
    operator2 + " is " + operator1 / operator2
  );
}
