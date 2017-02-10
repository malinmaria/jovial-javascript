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

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
  if(!isDrawing) return; //stops fn from running when not moused down
  console.log(e);
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
