$(document).ready(function(){
	var move = $('#carrousel').css('left');
	var number = parseInt(move.slice(0, -2));
  $('.prev').click(function(){ 
   	$('#carrousel').css('left', (number - 900) + 'px');
  });
  $('.next').click(function(){ 
   	$('#carrousel').css('left', (number + 900) + 'px');
  });
});