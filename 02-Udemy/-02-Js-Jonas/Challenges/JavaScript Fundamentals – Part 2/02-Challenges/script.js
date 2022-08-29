function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(` the tip was ${calcTip(100)} `);
// The bill was ${bill},, and the total value
// ${bill + tip}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(
  `the bills are ${bills} and the tips are ${tips} ,and the total are ${total}`
);
