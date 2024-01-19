const number = document.querySelector('.number');
const increase = document.querySelector('.btn__increase');
const decrease = document.querySelector('.btn__decrease');
const reset = document.querySelector('.btn__reset');

const clock = document.querySelector('.clock');
const clockTitle = document.querySelector('.clock__title');

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const week = date.getDay();
  const weekNames = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${year}년 ${month + 1}월 ${day}일 ${
    weekNames[week]
  } ${hours < 10 ? `0${hours}` : hours}시 ${
    minutes < 10 ? `0${minutes}` : minutes
  }분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
}

getTime();
setInterval(getTime, 1000);

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
