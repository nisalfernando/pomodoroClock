/*****************/
/*** Selectors ***/

var modalBtn = document.getElementsByClassName("modal-btn");
var modal = document.getElementsByClassName("modal-about");
var cancel = document.getElementsByClassName("modal-cancel");

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
}