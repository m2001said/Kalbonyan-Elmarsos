const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
markMiller.calcBMI();
johnSmith.calcBMI();

console.log(`John's BMI ${johnSmith.BMI} and Mark's!  ${markMiller.BMI}`);

if (johnSmith.BMI > markMiller.BMI) {
  console.log(
    `John's BMI ${johnSmith.BMI} is higher than Mark's!  ${markMiller.BMI}`
  );
} else if (johnSmith.BMI < markMiller.BMI) {
  console.log(
    `Mark's BMI ${markMiller.BMI} is higher than John's!  ${johnSmith.BMI}`
  );
} else {
  console.log(`nooooo :(`);
}
