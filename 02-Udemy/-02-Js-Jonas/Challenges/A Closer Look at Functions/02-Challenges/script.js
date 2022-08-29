'use strict';
//use IIFE ===> Immediately Invoked Function Expression
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  //closures
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
