/*****************/
/*** Selectors ***/

const modalBtn = document.getElementsByClassName("modal-btn");
const modal = document.getElementsByClassName("modal-about");
const cancel = document.getElementsByClassName("modal-cancel");

var breakMins = document.getElementById("break-mins");
var breakSecs = document.getElementById("break-secs");
var mainMins = document.getElementById("main-mins");
var mainSecs = document.getElementById("main-secs");
var tally = document.querySelector('.tally-count');

var startBtn = document.querySelector(".start");
var pauseBtn = document.querySelector(".pause");
var resetBtn = document.querySelector(".reset");

var amendBtn = document.querySelectorAll(".increment-btn");

/** Variables **/
var mainMinutes = '';
var mainDeadline = '';
var timeInterval = '';
var breakMinutes = '';
var breakDeadline = '';

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
    mainMins.innerHTML = ('0' +.minutes).slice(-2);
  });
}