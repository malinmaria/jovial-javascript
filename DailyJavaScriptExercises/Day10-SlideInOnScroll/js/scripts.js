const sliderImgs = document.querySelectorAll('.slide-in');

//runs everytime user scrolls
function checkSlide(e) {
  console.count(e);
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
