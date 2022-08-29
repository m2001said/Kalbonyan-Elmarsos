//! challenge #1
// Data 1
// let markWeight = 78;
// let markTall = 1.69;
// let johnWeight = 92;
// let johnTall = 1.95;
// Data 2
let markWeight = 95;
let markTall = 1.88;
let johnWeight = 85;
let johnTall = 1.76;
let bmiMark = markWeight / markTall ** 2;
let bmiJohn = johnWeight / johnTall ** 2;
let markHigherBMI = bmiMark > bmiJohn;
console.log(
  "BMI for mark = " +
    bmiMark +
    "BMI for John = " +
    bmiJohn +
    "if BMI is heigher or not = " +
    markHigherBMI
);
