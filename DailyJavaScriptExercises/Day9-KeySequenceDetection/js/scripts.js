const pressed = [];
const code = 'malin';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  //starts from the end of 'code' and goes back 5 letters to make array exact length we need
  pressed.splice(-code.length - 1, pressed.length - code.length);
  //checks for 'code' we're looking for, .join('') turns what was typed into a string
  if(pressed.join('').includes(code)){
    // console.log("you got it!");
    cornify_add();
  }

  console.log(pressed);
})
