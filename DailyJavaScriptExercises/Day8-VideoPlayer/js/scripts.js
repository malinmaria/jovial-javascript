//Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player_slider');

//Build Functions
function togglePlay() {
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  // console.log(this.name);
  video[this.name] = this.value;
}

//Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
