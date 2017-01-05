const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  console.log(this.value);
}

//loops over each input, then when 'change' event is called then handleUpdate is called
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//so you don't have to let go of mouse for change to be detected
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
