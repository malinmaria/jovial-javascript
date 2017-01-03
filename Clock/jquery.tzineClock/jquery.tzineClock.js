(function($){

	// A global object used by the functions of the plug-in:
	var gVars = {};

	// Extending the jQuery core:
	$.fn.tzineClock = function(opts){
      //if the selector returned more than one element, we use the first one
      var container = this.eq(0);
      if(!container){
        try{
          console.log("Invalid selector");
        } catch(e){}
        return false;
      }
      if(!opts) opts = {};

      setup.call(container);

      return this;
}

function setup(){
  //colors of the dials
  var colors = ['orange','blue','green'];

  var tmp;
  for(var i=0; i < 3; i++){
    tmp = $('<div>').attr('class',colors[i]+' clock').html(
      '<div class="green clock"></div>'+
      '<div class="display"></div>'+
      '<div class="front left"></div>'+
      '<div class="rotate left">'+
      '<div class="bg left"></div>'+
      '</div>'+
      '<div class="rotate right">'+
      '<div class="bg right"></div>'+
      '</div>'
    );

    //Appending to the fancyClock container
    $(this).append(tmp);

    //assigning some elements as variables for speed
    tmp.rotateLeft = tmp.find('.rotate.left');
    tmp.rotateRight = tmp.find('.rotate.right');
    tmp.display = tmp.find('.display');

    //adding the dial as a global variable, available as gVars.colorName
    gVars[colors[i]] = tmp;
  }

    setInterval(function(){
      var currentTime = new Date();
      var h = currentTime.getHours();
      var m = currentTime.getMinutes();
      var s = currentTime.getSeconds();

      animation(gVars.green, s, 60);
      animation(gVars.blue, m, 60);
      animation(gVars.orange, h, 24);
    },1000);
  }

    function animation(clock,current,total){
      //calc current angle
      var angle = (360/total)*(current+1);
      var element;

      if(current==0){
        //hide right half of background
        clock.rotateRight.hide();

        //resetting left part
        rotateElement(clock.rotateLeft,0);
      }
      if(angle <= 180){
        element = clock.rotateLeft;
      }else{
        //start rotating the right part
        clock.rotateRight.show();
        clock.rotateLeft.show();

        rotateElement(clock.rotateLeft, 180);
        element = clock.rotateRight;

        angle = angle-180;
      }
      rotateElement(element,angle);
      //setting text inside display element, starting with 0 if needed
      clock.display.html(current<10 ? '0'+ current:current);

    }

    function rotateElement(element,angle){
      //rotate element depending on browser
      var rotate = 'rotate('+angle+'deg)';

      if(element.css('MozTransform')!=undefined)
          element.css('MozTransform',rotate);
      else if(element.css('WebkitTransform')!=undefined)
          element.css('WebkitTransform',rotate);
    }


})(jQuery);
