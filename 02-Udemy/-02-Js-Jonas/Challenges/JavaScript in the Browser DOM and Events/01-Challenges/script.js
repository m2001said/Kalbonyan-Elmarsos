'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//function for messege to be dry code
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

//when you click on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when guess is empty
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');

    //when guess equal the random number
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'correct answer';
    displayMessage('correct answer');
    document.querySelector('.number').textContent = number;
    //change the background of the page when the guess equal the random number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //make the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //! Refactoring the project and try not to repeat any code
  } else if (guess !== number) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'too high' : 'too low';
      displayMessage(guess > number ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you loose the game';
      displayMessage('you loose the game');
    }
  }
});

//when guess greater  than  the random number
//   } else if (guess > number) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you loose the game';
//     }

//     //when guess smaller  than  the random number
//   } else if (guess < number) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you loose the game';
//     }
//   }
//   ////
// });

// Again Button to return every thing to the initial condition
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = '20';
  number = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
});
