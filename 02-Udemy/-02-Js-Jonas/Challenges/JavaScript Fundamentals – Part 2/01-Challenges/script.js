const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolhins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolhins, scoreKoalas);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas * 2) {
    console.log(`"Dolphins win ( ${avgDolhins} vs ${avgKoalas})"`);
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(`"Koalas win ( ${avgKoalas} vs ${avgDolhins})"`);
  } else {
    console.log(`No team wins`);
  }
}
checkWinner(scoreDolhins, scoreKoalas);
