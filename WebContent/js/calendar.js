let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' ];
let idNmae = 'day-';
let today = new Date();
let marker = document.createElement('div');
marker.setAttribute('class', 'active');

document.getElementById('today').textContent = today.getDate();

document.getElementById('month').textContent = months[today.getMonth()];

document.getElementById('year').textContent = today.getFullYear();

document.getElementById(idNmae + today.getDate()).appendChild(marker);
$(".calendarSmall").html(
		today.getDate() + "<em>" + months[today.getMonth()] + "</em>")

$('td').each(function(i, j) {
	if ($(this).children().length > 0) {
		return false;
	}
	$(this).css("background-color", "green");
});

$("#calendarHolderBG").on("click", function() {
	closeCalendar();
});
$("#calendarBTN").on("click", function() {
	openCalendar();
});
function openCalendar() {
	TweenLite.to("#calendarHolder", 2.7, {
		css : {
			left : 0,
			bottom : 0,
			width : '100%',
			height : '100%',
			opacity : 1,
			'z-index' : 1000
		},
		ease : Elastic.easeOut.config(1, 0.3)
	});
	TweenLite.to(".box", 2.7, {
		css : {
			left : '0',
			top : '0',
			opacity : 1,
			width : '100%',
			height : '100%',
			'z-index' : 1000
		},
		ease : Elastic.easeOut.config(1, 0.3)
	});
}

function closeCalendar() {
	TweenLite.to("#calendarHolder", 2.7, {
		css : {
			left : 0,
			bottom : 0,
			width : '0px',
			height : '0px',
			opacity : 0,
			'z-index' : 0
		},
		ease : Back.easeOut.config(1.7)
	});
	TweenLite.to(".box", 2.7, {
		css : {
			left : 0,
			bottom : 0,
			width : '0px',
			height : '0px',
			opacity : 0,
			'z-index' : 0
		},
		ease : Back.easeOut.config(1.7)
	});
}