const canvas = document.querySelector('#draw');
//context is what you're actually drawing on, not the canvas
const ctx = canvas.getContext('2d');
//setting canvas to fit exact size of the user window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//setting color and properties of the 'paint brush'
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
  if(!isDrawing) return; //stops fn from running when not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //move to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
};

canvas.addEventListener('mousemove', draw);
//fixing continuos line, allows brush to start drawing from anywhere
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
