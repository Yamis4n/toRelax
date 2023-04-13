
const place = document.getElementById('time');
const btn_start = document.getElementById('btn1');
const btn_pause = document.getElementById('btn2');
const btn_reset = document.getElementById('btn3');

var sec = -1;
var min = 0;
var hor = 0;
var paused = false;
var countInterval;


function startBtn() {
  if (sec == -1){
    sec ++;
    countInterval = setInterval(showTime, 1000);
  }
}

function pauseBtn() {
  console.log(paused);
  if (sec > -1 && paused == false){
    btn_pause.textContent = "RESUME";
    clearInterval(countInterval);
    paused = true;
  }
  else if (paused == true){
    btn_pause.textContent = "PAUSE";
    countInterval;
    paused = false;
    countInterval = setInterval(showTime, 1000);
  }
  
}

function resetBtn(){
  if (sec > -1 && paused == true){
    clearInterval(countInterval);
    place.textContent = "00:00:00";
    sec = -1;
    min = 0;
    hor  = 0;
    btn_pause.textContent = "PAUSE";
    paused = false;
  }
}

function showTime() {  

  // atualizar o tempo:
  sec++;
  if (sec == 60){
    min++;
    sec = 0;
  }
  if (min == 60){
    hor++;
    min = 0;
  }
// =============================== \\
  
  sh = (hor < 10)? "0" + hor : hor;
  sm = (min < 10)? "0" + min : min;
  ss = (sec < 10)? "0" + sec : sec;
  
  time = sh + ":" + sm + ":" + ss;
  place.textContent = time;
  
}

btn_start.addEventListener('click', startBtn);
btn_reset.addEventListener('click', resetBtn);
btn_pause.addEventListener('click', pauseBtn);

