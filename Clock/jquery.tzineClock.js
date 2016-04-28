function($){

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
  var colors = [orange,blue,green];

  var tmp;
  for(var = i=0; i < 3; i++){
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
  };

    setInterval(function(){

    })

    function animation(clock,current,total){

    }

    function rotateElement(element,angle){

    }
}

})(jQuery);
