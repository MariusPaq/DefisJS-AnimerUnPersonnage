//Game
var player = document.getElementById('player');
var goal = document.getElementById('goal');
var score = document.getElementById('score');
goal.style.top = '384px';
goal.style.left = '384px';
player.style.top = '312px';
player.style.left = '384px';
var img = ["url('img/1.png')","url('img/1w.png')","url('img/2.png')","url('img/2w.png')","url('img/3.png')","url('img/3w.png')","url('img/4.png')","url('img/4w.png')"];
const moveSize = 24;
var playerWalk = 0;
var points = 0;
//Game

//chrono
var estStart = 0;
var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
//chrono

//Game
document.addEventListener('keydown', function(event) {
  if (estStart==0) {
    estStart=1;
    chronoStart();
  }
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
      if (playerWalk%2 == 0) {
        player.style.backgroundImage = img[5];
      } else {
        player.style.backgroundImage = img[4];
      }
      if (player.offsetTop>0) {
        player.style.top = (player.offsetTop - moveSize) + "px";
      }
      recupeGoal();
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0) {
      player.style.backgroundImage = img[7];
    } else {
      player.style.backgroundImage = img[6];
    }
      if (player.offsetLeft<768) {
        player.style.left = (player.offsetLeft + moveSize) + "px";
      }
      recupeGoal();
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0) {
      player.style.backgroundImage = img[1];
    } else {
      player.style.backgroundImage = img[0];
    }
    if (player.offsetTop<764) {
      player.style.top = (player.offsetTop + moveSize) + "px";
    }
    recupeGoal();
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 == 0) {
      player.style.backgroundImage = img[3];
    } else {
      player.style.backgroundImage = img[2];
    }
    if (player.offsetLeft>0) {
      player.style.left = (player.offsetLeft - moveSize) + "px";
    }
    recupeGoal();
  }
});

function recupeGoal(){
  if ((player.offsetTop==goal.offsetTop)&&(player.offsetLeft==goal.offsetLeft)) {
    var topG = randomGoal()+'px';
    var leftG = randomGoal()+'px';
    goal.style.top = topG;
    goal.style.left = leftG;
    scoreGame();
  }
}

function scoreGame(){
  if (points==9) {
    alert('Win');
    window.location.reload(false);
  }
  points ++;
  score.innerHTML="Score: "+points;
  console.log('points: '+points);
}

function randomGoal(){
  return Math.round((Math.random()*(768-0)+0)/24)*24;
}

function lose(){
  alert('Lose');
  window.location.reload(false);
}
//Game

//Chrono
function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var msec = diff.getMilliseconds();
	var sec = diff.getSeconds();
  if (sec >= 10){
    document.getElementById("chronotime").style.color="yellow";
    document.getElementById("chronotime").style.fontSize="20px";
  }
  if (sec >= 13){
    document.getElementById("chronotime").style.color="orange";
    document.getElementById("chronotime").style.fontSize="25px";
  }
  if (sec >= 16){
    document.getElementById("chronotime").style.color="red";
    document.getElementById("chronotime").style.fontSize="30px";
  }
  if (sec >= 20) {
    lose();
  }
	if (sec < 10){
		sec = "0" + sec;
	}
	if(msec < 10){
		msec = "00" +msec;
	}
	else if(msec < 100){
		msec = "0" +msec;
	}
	document.getElementById("chronotime").innerHTML = sec + ":" + msec;
	timerID = setTimeout("chrono()", 1);
}

function chronoStart(){
	start = new Date();
	chrono();
}

function chronoContinue(){
	start = new Date()-diff;
	start = new Date(start);
	chrono();
}

function chronoReset(){
	document.getElementById("chronotime").innerHTML = "00:000";
	start = new Date();
}

function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:000";
}

function chronoStop(){
	clearTimeout(timerID);
}
//Chrono
