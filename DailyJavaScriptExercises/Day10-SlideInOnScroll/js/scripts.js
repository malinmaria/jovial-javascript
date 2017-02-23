const sliderImgs = document.querySelectorAll('.slide-in');

//runs everytime user scrolls
function checkSlide(e) {
  sliderImgs.forEach(sliderImg => {
    //gives px location at the bottom of the window, then subtracts half of the img height
    //this is done so we can start sliding the img in when half of it is shown
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImg.height / 2;
    //same thing but for when the user is scrolling back up the page
    //first finding px location of bottom of img, then finds half img location, then finds when img is scrolled past
    const imgBottom = sliderImg.offsetTop + sliderImg.height;
    const isHalfShown = slideInAt > sliderImg.offsetTop;
    const notScrolledPast = window.scrollY < imgBottom;
    //if both are true then active class is added, else it is removed
    if(isHalfShown && notScrolledPast){
      sliderImg.classList.add('active');
    }else {
      sliderImg.classList.remove('active');
    }
  });
}

//stops checkSlide function from running too many times
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


window.addEventListener('scroll', debounce(checkSlide));
