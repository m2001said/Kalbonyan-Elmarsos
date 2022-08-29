//! challenge #2

let markWeight = 78;
let markTall = 1.69;
let johnWeight = 92;
let johnTall = 1.95;
let bmiMark = markWeight / markTall ** 2;
let bmiJohn = johnWeight / johnTall ** 2;
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI ${bmiMark} is higher than John's!  ${bmiJohn}`);
} else {
  console.log(`John's BMI ${bmiJohn} is higher than Mark's!  ${bmiJohn}`);
}
