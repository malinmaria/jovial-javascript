//Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');

//Build Functions
function togglePlay() {
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

//Hook up event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
