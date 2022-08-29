//! challenge #3
//!  task 1
let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
let averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
let averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
if (averageDolphins > averageKoalas) {
  console.log("Dolphins wins 👏");
} else if (averageDolphins < averageKoalas) {
  console.log("Koalas wins 👏");
} else {
  console.log("all are equal");
}
//!  task 2
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;
averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins wins 👏");
} else (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Koalas wins 👏");
}
//!  task 3
dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;
koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;
averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins wins 👏");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Koalas wins 👏");
} else if ( averageDolphins===averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
  console.log(" Both win the trophy");
}else{
  console.log(" no team wins the trophy");
}
