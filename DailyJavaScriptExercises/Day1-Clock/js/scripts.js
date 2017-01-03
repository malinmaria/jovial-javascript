const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = ((mins/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minsDeg}deg)`;

  const hour = now.getMinutes();
  const hourDeg = ((hour/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
