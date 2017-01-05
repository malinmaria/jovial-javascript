const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  // dataset is an object that will contain all 'data-' attributes you created
  //  from each specific element, don't have to use any selectors for it
  // doing || '' because color doesn't have dataset and it will appened 'undefined' if this is not specified
  const suffix = this.dataset.sizing || '';
  //selecting css variable by first selecting entire document,
  //then setting a property of each variable (color, spacing, blur)-notice we defined a name for each input
  //this.name then gets set to this.value
  //adding suffix variable to add px to each value
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


//loops over each input, then when 'change' event is called then handleUpdate is called
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//so you don't have to let go of mouse for change to be detected
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
