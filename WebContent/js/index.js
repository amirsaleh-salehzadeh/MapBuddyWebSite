function moveWaves() {
	var heightOcean = Math.round($(window).height() / 8);
	$("#waveBG").width($(window).width() * 1.2);
	$("#waveBG").css('bottom', -1*($("#waveBG").height()/2) + 'px');
	$("#waveBG2").width($(window).width() * 1.5);
	$("#waveBG2").css('bottom', -1*($("#waveBG2").height() - $("#waveBG2").height()/3) + 'px');
	$("#ship").width($(window).width() * 0.12);
	$("#ship").css('bottom', -1*($("#waveBG2").height()/3) + 'px');
	$("#waveBG3").width($(window).width() * 1.8);
	$("#waveBG3").css('bottom', -1*($("#waveBG3").height() - $("#waveBG3").height()/6) + 'px');
}
$(document).ready(function() {
	$('body').width($(window).width());
	$('body').height($(window).height());
	moveWaves();
});
