$(".nav-highlight").mouseover(function() {
	$('.section').css('color','#cccccc');
	$('.section a').css('color','#cccccc');
    $('.section.'+$(this).attr('section-highlight')).css('color','#333333');
    $('.section.'+$(this).attr('section-highlight')+' a').css('color','#34495e');
}).mouseout(function(){
	$('.section').css('color','#333333');
	$('.section a').css('color','#34495e');
});