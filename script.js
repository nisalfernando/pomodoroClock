/*****************/
/*** Selectors ***/

const modalBtn = document.getElementsByClassName("modal-btn");
const modal = document.getElementsByClassName("modal-about");
const cancel = document.getElementsByClassName("modal-cancel");

const breakMins = document.getElementById("break-mins");
const breakSecs = document.getElementById("break-secs");
const mainMins = document.getElementById("main-mins");
const mainSecs = document.getElementById("main-secs");
const tally = document.querySelector('.tally-count');

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

const amendBtn = document.querySelectorAll(".increment-btn");

/** Variables **/
const mainMinutes = '';
const mainDeadline = '';
const timeInterval = '';
const breakMinutes = '';
const breakDeadline = '';

/** Methods **/
function timeRemaining(deadline) {
  console.log(Date.parse(deadline), date.parse(new Date()));
  var t = date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initClock() {
  const currentTime = new Date();
  mainMinutes = mainMins.innerHTML;
  mainDeadline = new Date(currentTime.getTime() + (mainMinutes * 60 * 1000));
  timeInterval = setInterval(function () {
    let x = timeRemaining(mainDeadline);
    mainMins.innerHTML = ('0' + x.minutes).slice(-2);
    mainSecs.innerHTML = ('0' + x.seconds).slice(-2);
    if (x.total <= 0) {
      clearInterval(timeInterval);
      increment(tally);
      if (tally.innerHTML % 4 == 0) {
        breakMins.innerHTML = 20;
      }
      alert('Time for a break');
      initBreak();
    }
  }, 1000);
}

function initBreak() {
  const currentTime = new Date();
  breakMinutes = breakMins.innerHTML;
  breakDeadline = new Date(currentTime.getTime() + (breakMinutes * 60 * 1000));
  timeInterval = setInterval(function () {
    let y = timeReamining(breakDeadline);
    breakMins.innerHTML = ('0' + y.minutes).slice(-2);
    breakSecs.innerHTML = ('0' + y.seconds).slice(-2);
    if (y.toatal <= 0) {
      clearInterval(timeInterval);
      reset();
      alert('Time for work');
      initClock();
      breakMins.innerHTML = 5;
    }
  }, 1000);
}

function reset() {
  clearInterval(timeInterval);
  mainMins.innerHTML = 25;
  mainSecs.innerHTML = ('0' + '0').slice(-2);
  breakMins.innerHTML = 5;
  breakSecs.innerHTML = ('0' + '0').slice(-2);
  console.log('Reset the clock');
}