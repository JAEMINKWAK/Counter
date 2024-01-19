const number = document.querySelector('.number');
const increase = document.querySelector('.btn__increase');
const decrease = document.querySelector('.btn__decrease');
const reset = document.querySelector('.btn__reset');

increase.addEventListener('click', function () {
  let currentNumber = parseInt(number.innerText, 10);
  currentNumber += 1;
  number.innerText = currentNumber;
});
decrease.addEventListener('click', function () {
  let currentNumber = parseInt(number.innerText, 10);
  currentNumber -= 1;
  number.innerText = currentNumber;
});
reset.addEventListener('click', function () {
  number.innerText = '0';
});
