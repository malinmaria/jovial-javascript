const secondHand = document.querySelector('.second');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
