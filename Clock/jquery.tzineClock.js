function($){

	// A global object used by the functions of the plug-in:
	var gVars = {};

	// Extending the jQuery core:
	$.fn.tzineClock = function(opts){
}

function setup(){
  //colors of the dials
  var colors = [orange,blue,green];

  var tmp;
  for(var = i; i < 3; i++){
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
  };

    setInterval(function(){

    })

    function animation(clock,current,total){

    }

    function rotateElement(element,angle){

    }
}

})(jQuery);
